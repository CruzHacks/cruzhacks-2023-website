import { useAuth0 } from "@auth0/auth0-react"
import React, { Dispatch, useState } from "react"
import { TeamFormationProps } from "../.."
// eslint-disable-next-line max-len
import { useBanner } from "../../../../../../contexts/PortalBanners/PortalBanner"
// eslint-disable-next-line max-len
import { ConfirmationModal } from "../../../Dashboard/components/ConfirmationModal/ConfirmationModal"
import { deleteTeam, lockTeam, removeTeamMember } from "../../api"
import "./TeamDisplay.scss"

export interface TeamMember {
  memberName: string
  memberID: string
}

export interface TeamDisplayProps {
  teamPage: TeamFormationProps
  setTeamPage: Dispatch<Partial<TeamFormationProps>>
}

export const TeamDisplay = (props: TeamDisplayProps) => {
  const { user, getAccessTokenSilently } = useAuth0()
  const { setBanner } = useBanner()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className='teamdisplay'>
      <ConfirmationModal
        open={open}
        setOpen={setOpen}
        header='Lock In Team'
        primaryButtonText='Lock In'
        primaryButtonHandler={() => {
          lockTeam(
            getAccessTokenSilently,
            props.setTeamPage,
            props.teamPage.teamName,
            setBanner
          )
        }}
        secondaryButtonText='Cancel'
        secondaryButtonHandler={() => setOpen(false)}
        body='Are you sure you wawnt to lock in your team?'
      />
      <div className='teamdisplay__header'>
        <div className='teamdisplay__header__title'>
          {props.teamPage.teamName || "*[No Team]*"}
        </div>
        {props.teamPage.teamLeader === user?.sub ? (
          <button
            className='teamdisplay__header__delete'
            onClick={() =>
              deleteTeam(
                getAccessTokenSilently,
                props.teamPage.teamName,
                props.setTeamPage,
                setBanner
              )
            }
          >
            Delete
          </button>
        ) : null}
      </div>
      <div className='teamdisplay__members'>
        {props.teamPage.teamMembers.map((member: TeamMember) => {
          return (
            <TeamMemberTag
              key={member.memberID}
              id={member.memberID}
              name={member.memberName}
              type='ACCEPTED'
              teamLeader={props.teamPage.teamLeader}
              setTeamPage={props.setTeamPage}
            />
          )
        })}
        {props.teamPage.invitedTeamMembers.map((member: TeamMember) => {
          return (
            <TeamMemberTag
              key={member.memberID}
              id={member.memberID}
              name={member.memberName}
              type='INVITED'
              teamLeader={props.teamPage.teamLeader}
              setTeamPage={props.setTeamPage}
            />
          )
        })}
      </div>
      <div className='teamdisplay__review'>
        Please take a moment to review your team above. If everything looks
        correct, please press submit and get excited to hack with us very soon!
      </div>
      {!props.teamPage.lockedIn ? (
        <button
          className='teamdisplay__submit-button'
          onClick={() => setOpen(true)}
        >
          Submit
        </button>
      ) : null}
    </div>
  )
}

interface TeamMemberTagProps {
  name: string
  id: string
  type: "INVITED" | "ACCEPTED"
  teamLeader: string
  setTeamPage: Dispatch<Partial<TeamFormationProps>>
}

const TeamMemberTag = (props: TeamMemberTagProps) => {
  const { getAccessTokenSilently, user } = useAuth0()

  const { setBanner } = useBanner()
  return (
    <div className='membertag'>
      <div className={`membertag--name ${props.type}`}>
        {props.name || "<Empty>"}
      </div>
      {props.teamLeader === user?.sub && props.id !== props.teamLeader ? (
        <button
          className='membertag--remove'
          onClick={() => {
            removeTeamMember(
              getAccessTokenSilently,
              props.id,
              props.name,
              props.setTeamPage,
              setBanner
            )
          }}
        >
          Remove
        </button>
      ) : null}
    </div>
  )
}
