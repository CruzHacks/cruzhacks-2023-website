import React, { useEffect, useState } from "react"
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
import { useAuth0 } from "@auth0/auth0-react"
import { checklistProps } from "./Props/checklistprops"
import { confirmAttendance, getProfile } from "./api"
// eslint-disable-next-line max-len
import { ReactComponent as Background } from "../../../assets/HackerPortalBackground.svg"

const HackerDash: React.FC = () => {
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
      <div className='hackerdash'>
        <div className='hackerdash__container'>
          <HackerDashWelcome
            cruzPoints={cruzPoints}
            setCruzPoints={setCruzPoints}
          />
          <div className='hackerdash__container--row'>
            <div className='hackerdash__container--column'>
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
        <div className='hackerdash__lower-container'>
          <Checklist />
          <ImportantDates />
        </div>
        <div className='hackerdash__background'>
          <Background />
        </div>
      </div>
    )
  } else {
    return <div className='hackerdash'></div>
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
        {checklistProps.map((props: ChecklistItemProps) => (
          <ChecklistItem
            key={props.checklistNum}
            checklistNum={props.checklistNum}
            title={props.title}
            message={props.message}
            buttonText={props.buttonText}
            onClick={props.onClick}
            isUnclickable={props.isUnclickable}
            unClickableText={props.unClickableText}
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
