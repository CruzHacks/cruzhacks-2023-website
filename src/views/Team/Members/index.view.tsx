import React from "react"
import "./index.scss"
import TeamGrid from "../../../components/TeamGrid/index"

const Members: React.FC = () => {
  return (
    <div className='members__container'>
      <div>2023 Organizing Team</div>
      <div>
        <TeamGrid />
      </div>
      <div className='members__container--thanks'>
        Special thanks to our Board of Directors
      </div>
      <div className='members_container--names'>
        Doug Erickson, Nathan Westrup, Amanda Rotella, Nada Milijkovic, and Drew
        Meyer
      </div>
    </div>
  )
}

export default Members
