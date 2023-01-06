import { useAuth0 } from "@auth0/auth0-react"
import React, { useEffect, useState } from "react"
import { getTeamProfile } from "./api"
import {
  Invitation,
  InvitationMode,
  TeamBulder,
} from "./components/TeamBuilder/TeamBuilder"
import { TeamDisplay, TeamMember } from "./components/TeamDisplay/TeamDisplay"
import { TeamGuidelines } from "./components/TeamGuidelines/TeamGuidelines"
import "./index.scss"

const TeamFormation: React.FC = () => {
  const [invitationType, setInvitationType] = useState<InvitationMode>("JOIN")
  const [teamName, setTeamName] = useState<string>("")
  const [teamMembers, setTeamMembers] = useState<Array<TeamMember>>([])
  const [render, setRender] = useState<boolean>(false)
  const [invitations, setInvitations] = useState<Array<Invitation>>([])
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    getTeamProfile(
      getAccessTokenSilently,
      setTeamName,
      setTeamMembers,
      setInvitationType,
      setInvitations
    ).then(() => setRender(true))
  }, [])
  if (render) {
    return (
      <div className='teamformation'>
        <div className='teamformation__container'>
          <div className='teamformation__container--row'>
            <div className='teamformation__container--col'>
              <div className='teamformation__header'>Team Formation</div>
              <TeamGuidelines />
              <TeamBulder
                setTeamName={setTeamName}
                invitationType={invitationType}
                setInvitationType={setInvitationType}
                setTeamMembers={setTeamMembers}
                invites={invitations}
              />
            </div>
            <TeamDisplay members={teamMembers} teamName={teamName} />
          </div>
        </div>
      </div>
    )
  } else {
    return <div className='teamformation'></div>
  }
}

export default TeamFormation
