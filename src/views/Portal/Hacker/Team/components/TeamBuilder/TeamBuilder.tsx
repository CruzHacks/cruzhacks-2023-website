import React, { Dispatch, useState } from "react"
import "./TeamBuilder.scss"

type InvitationMode = "JOIN" | "CREATE"

export const TeamBulder = () => {
  const [invitationType, setInvitationType] = useState<InvitationMode>("JOIN")

  return (
    <div className='teambuilder'>
      <InvitationTypeChooser
        invitationType={invitationType}
        setInvitationType={setInvitationType}
      />
      {invitationType === "JOIN" ? <JoinTeam /> : <CreateTeam />}
    </div>
  )
}

const InvitationTypeChooser = (props: {
  invitationType: InvitationMode
  setInvitationType: Dispatch<InvitationMode>
}) => {
  return (
    <div className='invitation-type'>
      <div className='invitation-type__header'>
        Would you like to create or join a team?
      </div>
      <div className='invitation-type__options'>
        <button
          className={`invitation-type__options--button${
            props.invitationType === "CREATE" ? "--selected" : ""
          }`}
        >
          Create
        </button>
        <button
          className={`invitation-type__options--button${
            props.invitationType === "JOIN" ? "--selected" : ""
          }`}
        >
          Join
        </button>
      </div>
    </div>
  )
}

const JoinTeam = () => {
  return (
    <div className='jointeam'>
      <div className='jointeam__title'>Join Team</div>
      <div className='jointeam__container'>
        <div className='jointeam__container__header'>Pending Invitations</div>
        <div className='jointeam__container__invitations'>
          <Invitation teamName='Slug Hackers' />
        </div>
      </div>
    </div>
  )
}

const Invitation = (props: { teamName: string }) => {
  return (
    <div className='invitation'>
      <div className='invitation__header'>{props.teamName}</div>
      <div className='invitation__buttons'>
        <button className='invitation__buttons__accept'>Accept</button>
        <button className='invitation__buttons__decline'>Decline</button>
      </div>
    </div>
  )
}

const CreateTeam = () => {
  return (
    <div className='createteam'>
      <div className='createteam__naming'>
        <div className='createteam__naming__header'>
          Please input your team name
        </div>
        <input
          type='text'
          placeholder='Enter Name'
          className='createteam__naming__input'
        />
      </div>
      <div className='createteam__invitation'>
        <div className='createteam__invitation__header'>
          Invite existing hackers or add new hackers
        </div>
        <input
          type='text'
          placeholder='Enter Email'
          className='createteam__invitation__input'
        />
      </div>
    </div>
  )
}
