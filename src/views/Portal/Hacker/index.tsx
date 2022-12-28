import React from "react"
import "./index.scss"
// eslint-disable-next-line max-len
import { AttendanceStatus } from "./components/AttendanceStatus/AttendanceStatus"
import { HackerDashWelcome } from "./components/Welcome/Welcome"
import { Leaderboard } from "./components/Leaderboard/Leaderboard"

const HackerDash: React.FC = () => {
  return (
    <div className='hackerdash__container'>
      <HackerDashWelcome />
      <div className='hackerdash__container--row'>
        <AttendanceStatus />
        <Leaderboard />
      </div>
    </div>
  )
}

export default HackerDash
