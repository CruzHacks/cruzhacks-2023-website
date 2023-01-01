import React, { useEffect, useState } from "react"
import {
  InvitationMode,
  TeamBulder,
} from "./components/TeamBuilder/TeamBuilder"
import { TeamDisplay, TeamMembers } from "./components/TeamDisplay/TeamDisplay"
import { TeamGuidelines } from "./components/TeamGuidelines/TeamGuidelines"
import "./index.scss"

const SampleTeamMembers: TeamMembers = [
  {
    position: 1,
    name: "Sidhanta Sharma",
  },
  {
    position: 2,
    name: "",
  },
  {
    position: 3,
    name: "",
  },
  {
    position: 4,
    name: "",
  },
  {
    position: 5,
    name: "",
  },
]

const TeamFormation: React.FC = () => {
  const [invitationType, setInvitationType] = useState<InvitationMode>("CREATE")
  const [teamName, setTeamName] = useState<string>("")
  useEffect(() => {}, [])

  return (
    <div className='teamformation'>
      <div className='teamformation__container'>
        <div className='teamformation__container--row'>
          <div className='teamformation__container--col'>
            <div className='teamformation__header'>Team Formation</div>
            <TeamGuidelines />
            <TeamBulder
              invitationType={invitationType}
              setInvitationType={setInvitationType}
            />
          </div>
          <TeamDisplay members={SampleTeamMembers} teamName={teamName} />
        </div>
      </div>
    </div>
  )
}

export default TeamFormation
