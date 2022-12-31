import React from "react"
import { TeamGuidelines } from "./components/TeamGuidelines/TeamGuidelines"
import "./index.scss"

const TeamFormation: React.FC = () => {
  return (
    <div className='teamformation'>
      <div className='teamformation__container'>
        <div className='teamformation__container__header'>Team Formation</div>
        <div className='teamformation__container--row'>
          <TeamGuidelines />
        </div>
      </div>
    </div>
  )
}

export default TeamFormation
