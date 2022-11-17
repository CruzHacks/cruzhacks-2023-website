import React from "react"
import "./index.scss"
import TeamGrid from "../../../components/TeamGrid/index"

const Members: React.FC = () => {
  return (
    <div className='members__container'>
      <h3>2023 Organizing Team</h3>
      <div>
        <TeamGrid />
      </div>
      <div className='members__container--names'>
        <h4>Board of Directors</h4>
        <h5>Doug Erickson</h5>
        <h5>Nathan Westrup</h5>
        <h5>Amanda Rotella</h5>
        <h5>Nada Miljkovic</h5>
        <h5>Drew Meyer</h5>
      </div>
    </div>
  )
}

export default Members
