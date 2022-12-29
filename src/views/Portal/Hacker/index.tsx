import React from "react"
import "./index.scss"
// eslint-disable-next-line max-len
import { AttendanceStatus } from "./components/AttendanceStatus/AttendanceStatus"
import { HackerDashWelcome } from "./components/Welcome/Welcome"
import { Leaderboard } from "./components/Leaderboard/Leaderboard"
import { Submission } from "./components/Sumbission/Submission"
import {
  ChecklistItem,
  ChecklistItemProps,
} from "./components/ChecklistItem/ChecklistItem"
// eslint-disable-next-line max-len
import { ImportantDatesTable } from "./components/ImportantDatesTable/ImportantDatesTable"

const checklistProps: Array<ChecklistItemProps> = [
  {
    checklistNum: 1,
    title: "Accept Invitation",
    message: `Let us know you will be joining us! 
    We want to make sure we are ready to give you 
    the best experience for Cruzhacks 2023`,
    buttonText: "Accept",
    onClick: () => {},
  },
  {
    checklistNum: 2,
    title: "Create or join a team",
    message: `What’s a hackathon without a group 
    of fellow hackers? Find your team to start 
    innovating!`,
    buttonText: "Get Started",
    onClick: () => {},
  },
  {
    checklistNum: 3,
    title: "Check out our Hackerpack",
    message: `You can find everything you need to 
    know in our hacker packet PDF. It covers what 
    you need to bring, travel info, workshop info, 
    and more!`,
    buttonText: "HackerPack",
    onClick: () => {},
  },
]

const HackerDash: React.FC = () => {
  return (
    <div className='hackerdash'>
      <div className='hackerdash__container'>
        <HackerDashWelcome />
        <div className='hackerdash__container--row'>
          <div className='hackerdash__container--column'>
            <AttendanceStatus />
            <Submission canSubmit={true} />
          </div>
          <Leaderboard />
        </div>
      </div>
      <div className='hackerdash__lower-container'>
        <Checklist />
        <ImportantDates />
      </div>
    </div>
  )
}

const Checklist = () => {
  return (
    <div className='checklist'>
      <div className='checklist__title'>
        My Hackathon Checklist
        <div className='checklist__title__blurb'>
          Make sure to get these tasks done before you start hacking!
        </div>
      </div>
      <div className='checklist__items'>
        {checklistProps.map((props: ChecklistItemProps) => (
          <ChecklistItem
            key={props.checklistNum}
            checklistNum={props.checklistNum}
            title={props.title}
            message={props.message}
            buttonText={props.buttonText}
            onClick={props.onClick}
          />
        ))}
      </div>
    </div>
  )
}

const ImportantDates = () => {
  return (
    <div className='important-dates'>
      <div className='important-dates__title'>Important Dates</div>
      <div className='important-dates__table'>
        <ImportantDatesTable />
      </div>
    </div>
  )
}

export default HackerDash
