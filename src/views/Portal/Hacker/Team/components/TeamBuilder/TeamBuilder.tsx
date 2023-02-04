import { useAuth0 } from "@auth0/auth0-react"
import React, { Dispatch, useState } from "react"
import {
  rsvpInvite,
  changeInvitationMode,
  createTeam,
  inviteTeamMember,
} from "../../api"
import "./TeamBuilder.scss"
import { TeamFormationProps } from "../.."
// eslint-disable-next-line max-len
import { useBanner } from "../../../../../../contexts/PortalBanners/PortalBanner"

export type InvitationMode = "JOIN" | "CREATE"

export interface TeamBuilderProps {
  teamPage: TeamFormationProps
  setTeamPage: Dispatch<Partial<TeamFormationProps>>
}

export interface Invitation {
  teamName: string
}

export const TeamBulder = (props: TeamBuilderProps) => {
  if (!props.teamPage.lockedIn) {
    return (
      <div className='teambuilder'>
        <InvitationTypeChooser
          invitationType={props.teamPage.invitationType}
          setTeamPage={props.setTeamPage}
        />
        {props.teamPage.invitationType === "JOIN" ? (
          <JoinTeam
            invites={props.teamPage.invitations}
            setTeamPage={props.setTeamPage}
          />
        ) : (
          <CreateTeam
            teamPage={props.teamPage}
            setTeamPage={props.setTeamPage}
          />
        )}
      </div>
    )
  } else {
    return null
  }
}

const InvitationTypeChooser = (props: {
  invitationType: InvitationMode
  setTeamPage: Dispatch<Partial<TeamFormationProps>>
}) => {
  const { getAccessTokenSilently } = useAuth0()
  const { setBanner } = useBanner()
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
              props.setTeamPage,
              setBanner
            )
          }}
        >
          Switch
        </button>
      </div>
    </div>
  )
}

const JoinTeam = (props: {
  invites: Array<Invitation>
  setTeamPage: Dispatch<Partial<TeamFormationProps>>
}) => {
  return (
    <div className='jointeam'>
      <div className='jointeam__title'>Join Team</div>
      <div className='jointeam__container'>
        <div className='jointeam__container__header'>Pending Invitations</div>
        <div className='jointeam__container__invitations'>
          {props.invites.map(invite => (
            <Invitation
              key={invite.teamName}
              teamName={invite.teamName}
              setTeamPage={props.setTeamPage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const Invitation = (props: {
  teamName: string
  setTeamPage: Dispatch<Partial<TeamFormationProps>>
}) => {
  const { getAccessTokenSilently } = useAuth0()
  const { setBanner } = useBanner()
  return (
    <div className='invitation'>
      <div className='invitation__header'>{props.teamName}</div>
      <div className='invitation__buttons'>
        <button
          className='invitation__buttons__accept'
          onClick={() => {
            rsvpInvite(
              getAccessTokenSilently,
              props.setTeamPage,
              props.teamName,
              "ACCEPTED",
              setBanner
            )
          }}
        >
          Accept
        </button>
        <button
          className='invitation__buttons__decline'
          onClick={() => {
            rsvpInvite(
              getAccessTokenSilently,
              props.setTeamPage,
              props.teamName,
              "DECLINE",
              setBanner
            )
          }}
        >
          Decline
        </button>
      </div>
    </div>
  )
}

const CreateTeam = (props: {
  teamPage: TeamFormationProps
  setTeamPage: Dispatch<Partial<TeamFormationProps>>
}) => {
  const { getAccessTokenSilently, user } = useAuth0()
  const [teamNameInput, setTeamNameInput] = useState<string>("")
  const [invitedMemberEmail, setInvitedMemberEmail] = useState<string>("")
  const { setBanner } = useBanner()
  return (
    <div className='createteam'>
      {!props.teamPage.teamLeader ? (
        <>
          <div className='createteam__title'>Create Team</div>
          <div className='createteam__naming'>
            <div className='createteam__naming__header'>
              Please Input Your Team Name
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
                props.setTeamPage,
                setBanner
              )
            }
          >
            Create
          </button>
        </>
      ) : (
        <>
          <div className='createteam__title'>Invite Members</div>
          <div className='createteam__invitation'>
            <div className='createteam__invitation__header'>
              Invite Hackers To Your Team!
            </div>
            <input
              type='text'
              placeholder='Enter Email'
              className='createteam__invitation__input'
              value={invitedMemberEmail}
              onChange={e => setInvitedMemberEmail(e.target.value)}
            />
          </div>
          <button
            className='createteam__invitation__invite'
            onClick={() => {
              setInvitedMemberEmail("")
              inviteTeamMember(
                getAccessTokenSilently,
                invitedMemberEmail,
                props.setTeamPage,
                setBanner
              )
            }}
          >
            Invite
          </button>
        </>
      )}
    </div>
  )
}
