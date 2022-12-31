import React from "react"
import { TeamBulder } from "./components/TeamBuilder/TeamBuilder"
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
  return (
    <div className='teamformation'>
      <div className='teamformation__container'>
        <div className='teamformation__container--row'>
          <div className='teamformation__container--col'>
            <div className='teamformation__header'>Team Formation</div>
            <TeamGuidelines />
            <TeamBulder />
          </div>
          <TeamDisplay members={SampleTeamMembers} teamName='SlugHackers' />
        </div>
      </div>
    </div>
  )
}

export default TeamFormation
