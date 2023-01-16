import React from "react"
import "./index.scss"
import {
  DecisionData,
  DemographicsData,
} from "../UserManagement/components/doughnut/index"

const HackerOverview: React.FC = () => {
  return (
    <div className='overview__container'>
      <div className='overview__container--title'>
        <div className='overview__container--text'>Hacker Overview</div>
      </div>
      <DecisionData />
      <DemographicsData />
    </div>
  )
}

export default HackerOverview
