import { useAuth0 } from "@auth0/auth0-react"
import React, { useEffect, useReducer, useState } from "react"
import {
  BannerProvider,
  useBanner,
} from "../../../../contexts/PortalBanners/PortalBanner"
import { getTeamProfile } from "./api"
import {
  Invitation,
  InvitationMode,
  TeamBulder,
} from "./components/TeamBuilder/TeamBuilder"
import { TeamDisplay, TeamMember } from "./components/TeamDisplay/TeamDisplay"
import { TeamGuidelines } from "./components/TeamGuidelines/TeamGuidelines"
import "./index.scss"

export interface TeamFormationProps {
  invitationType: InvitationMode
  teamName: string
  teamMembers: Array<TeamMember>
  invitedTeamMembers: Array<TeamMember>
  teamLeader: string
  invitations: Array<Invitation>
}

const TeamFormation: React.FC = () => {
  const [render, setRender] = useState<boolean>(false)
  const { getAccessTokenSilently } = useAuth0()

  const initialTeamPage: TeamFormationProps = {
    invitationType: "JOIN",
    teamName: "",
    teamMembers: [],
    invitedTeamMembers: [],
    teamLeader: "",
    invitations: [],
  }
  const teamPageReducer = (
    state: TeamFormationProps,
    action: Partial<TeamFormationProps>
  ) => {
    return { ...state, ...action }
  }

  const [teamPage, setTeamPage] = useReducer(teamPageReducer, initialTeamPage)
  const { setBanner } = useBanner()
  useEffect(() => {
    getTeamProfile(getAccessTokenSilently, setTeamPage, setBanner).then(() =>
      setRender(true)
    )
  }, [])
  if (render) {
    return (
      <BannerProvider>
        <div className='teamformation'>
          <div className='teamformation__container'>
            <div className='teamformation__container--row'>
              <div className='teamformation__container--col'>
                <div className='teamformation__header'>Team Formation</div>
                <TeamGuidelines />
                <TeamBulder setTeamPage={setTeamPage} teamPage={teamPage} />
              </div>
              <TeamDisplay teamPage={teamPage} setTeamPage={setTeamPage} />
            </div>
          </div>
        </div>
      </BannerProvider>
    )
  } else {
    return <div className='teamformation'></div>
  }
}

export default TeamFormation
