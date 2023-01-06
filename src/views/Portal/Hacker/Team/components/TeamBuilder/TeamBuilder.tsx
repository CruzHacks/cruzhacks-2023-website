import { useAuth0 } from "@auth0/auth0-react"
import React, { Dispatch, useState } from "react"
import { TeamMember } from "../TeamDisplay/TeamDisplay"
import {
  acceptInvite,
  changeInvitationMode,
  createTeam,
  inviteTeamMember,
} from "../../api"
import "./TeamBuilder.scss"

export type InvitationMode = "JOIN" | "CREATE"

export interface TeamBuilderProps {
  invitationType: InvitationMode
  setInvitationType: Dispatch<InvitationMode>
  setTeamName: Dispatch<string>
  setTeamMembers: Dispatch<Array<TeamMember>>
  invites: Array<Invitation>
}

export interface Invitation {
  teamName: string
}

export const TeamBulder = (props: TeamBuilderProps) => {
  const { invitationType, setInvitationType } = props

  return (
    <div className='teambuilder'>
      <InvitationTypeChooser
        invitationType={invitationType}
        setInvitationType={setInvitationType}
      />
      {invitationType === "JOIN" ? (
        <JoinTeam invites={props.invites} />
      ) : (
        <CreateTeam
          setTeamName={props.setTeamName}
          setTeamMembers={props.setTeamMembers}
        />
      )}
    </div>
  )
}

const InvitationTypeChooser = (props: {
  invitationType: InvitationMode
  setInvitationType: Dispatch<InvitationMode>
}) => {
  const { getAccessTokenSilently } = useAuth0()
  return (
    <div className='invitation-type'>
      <div className='invitation-type__header'>
        Would you like to create or join a team?
      </div>
      <div className='invitation-type__options'>
        <div className='invitation-type__options--selected'>
          {props.invitationType}
        </div>
        <button
          className='invitation-type__options--button'
          onClick={() => {
            changeInvitationMode(
              getAccessTokenSilently,
              props.setInvitationType
            )
          }}
        >
          Switch
        </button>
      </div>
    </div>
  )
}

const JoinTeam = (props: { invites: Array<Invitation> }) => {
  return (
    <div className='jointeam'>
      <div className='jointeam__title'>Join Team</div>
      <div className='jointeam__container'>
        <div className='jointeam__container__header'>Pending Invitations</div>
        <div className='jointeam__container__invitations'>
          {props.invites.map(invite => (
            <Invitation key={invite.teamName} teamName={invite.teamName} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Invitation = (props: { teamName: string }) => {
  const { getAccessTokenSilently } = useAuth0()
  return (
    <div className='invitation'>
      <div className='invitation__header'>{props.teamName}</div>
      <div className='invitation__buttons'>
        <button
          className='invitation__buttons__accept'
          onClick={() => {
            acceptInvite(getAccessTokenSilently, props.teamName)
          }}
        >
          Accept
        </button>
        <button className='invitation__buttons__decline'>Decline</button>
      </div>
    </div>
  )
}

const CreateTeam = (props: {
  setTeamName: Dispatch<string>
  setTeamMembers: Dispatch<Array<TeamMember>>
}) => {
  const { getAccessTokenSilently, user } = useAuth0()
  const [teamNameInput, setTeamNameInput] = useState<string>("")
  const [invitedMemberEmail, setInvitedMemberEmail] = useState<string>("")

  return (
    <div className='createteam'>
      <div className='createteam__title'>Create Team</div>
      <div className='createteam__naming'>
        <div className='createteam__naming__header'>
          Please input your team name
        </div>
        <input
          type='text'
          placeholder='Enter Name'
          className='createteam__naming__input'
          onChange={e => setTeamNameInput(e.target.value)}
        />
      </div>
      <button
        className='createteam__naming__create'
        onClick={() =>
          createTeam(
            getAccessTokenSilently,
            `${user?.given_name} ${user?.family_name}`,
            teamNameInput,
            props.setTeamName,
            props.setTeamMembers
          )
        }
      >
        Create
      </button>
      <div className='createteam__invitation'>
        <div className='createteam__invitation__header'>
          Invite existing hackers or add new hackers
        </div>
        <input
          type='text'
          placeholder='Enter Email'
          className='createteam__invitation__input'
          onChange={e => setInvitedMemberEmail(e.target.value)}
        />
      </div>
      <button
        className='createteam__invitation__invite'
        onClick={() =>
          inviteTeamMember(getAccessTokenSilently, invitedMemberEmail)
        }
      >
        Invite
      </button>
    </div>
  )
}
