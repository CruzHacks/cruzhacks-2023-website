import { useAuth0 } from "@auth0/auth0-react"
import React, { Dispatch, useEffect, useState } from "react"
import { confirmAttendance, getProfile } from "./api"
// eslint-disable-next-line max-len
import { AttendanceStatus } from "./components/AttendanceStatus/AttendanceStatus"
import { ChecklistItem } from "./components/ChecklistItem/ChecklistItem"
// eslint-disable-next-line max-len
import { ImportantDatesTable } from "./components/ImportantDatesTable/ImportantDatesTable"
import { Leaderboard } from "./components/Leaderboard/Leaderboard"
import { Submission } from "./components/Sumbission/Submission"
import { HackerDashWelcome } from "./components/Welcome/Welcome"
import { checklistProps } from "./Props/checklistprops"
import "./index.scss"

export const MainDash = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [cruzPoints, setCruzPoints] = useState<number>(0)
  const [attendanceStatus, setAttendanceStatus] = useState<boolean>(false)
  const [render, setRender] = useState<boolean>(false)

  useEffect(() => {
    getProfile(getAccessTokenSilently, setCruzPoints, setAttendanceStatus).then(
      () => setRender(true)
    )
  }, [])
  if (render) {
    return (
      <div className='maindash'>
        <div className='maindash__container'>
          <HackerDashWelcome
            cruzPoints={cruzPoints}
            setCruzPoints={setCruzPoints}
            enableCruzPoints={attendanceStatus}
          />
          <div className='maindash__container--row'>
            <div className='maindash__container--column'>
              <AttendanceStatus
                attendanceStatus={attendanceStatus}
                confirmHandler={() =>
                  confirmAttendance(getAccessTokenSilently, setAttendanceStatus)
                }
              />
              <Submission canSubmit={true} />
            </div>
            <Leaderboard />
          </div>
        </div>
        <div className='maindash__lower-container'>
          <Checklist />
          <ImportantDates />
        </div>
      </div>
    )
  } else {
    return null
  }
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
        <ChecklistItem
          key={checklistProps[0].checklistNum}
          checklistNum={checklistProps[0].checklistNum}
          title={checklistProps[0].title}
          message={checklistProps[0].message}
          buttonText={checklistProps[0].buttonText}
          onClick={checklistProps[0].onClick}
          isUnclickable={checklistProps[0].isUnclickable}
          unClickableText={checklistProps[0].unClickableText}
        />
        <ChecklistItem
          key={checklistProps[1].checklistNum}
          checklistNum={checklistProps[1].checklistNum}
          title={checklistProps[1].title}
          message={checklistProps[1].message}
          buttonText={checklistProps[1].buttonText}
          onClick={() => {}}
          isUnclickable={checklistProps[1].isUnclickable}
          unClickableText={checklistProps[2].unClickableText}
        />
        <ChecklistItem
          key={checklistProps[2].checklistNum}
          checklistNum={checklistProps[2].checklistNum}
          title={checklistProps[2].title}
          message={checklistProps[2].message}
          buttonText={checklistProps[2].buttonText}
          onClick={checklistProps[2].onClick}
          isUnclickable={checklistProps[2].isUnclickable}
          unClickableText={checklistProps[2].unClickableText}
        />
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
