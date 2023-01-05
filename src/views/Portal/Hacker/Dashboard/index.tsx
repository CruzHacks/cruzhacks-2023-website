import { useAuth0 } from "@auth0/auth0-react"
import React, { Dispatch, useEffect, useState } from "react"
import { confirmAttendance, getHackerProfile } from "./api"
// eslint-disable-next-line max-len
import {
  AttendanceStatus,
  HackerStatus,
} from "./components/AttendanceStatus/AttendanceStatus"
import { ChecklistItem } from "./components/ChecklistItem/ChecklistItem"
// eslint-disable-next-line max-len
import { ImportantDatesTable } from "./components/ImportantDatesTable/ImportantDatesTable"
import { Leaderboard } from "./components/Leaderboard/Leaderboard"
import { HackerDashWelcome } from "./components/Welcome/Welcome"
import { checklistProps } from "./Props/checklistprops"
import "./index.scss"
// eslint-disable-next-line max-len
import { ConfirmationModal } from "./components/ConfirmationModal/ConfirmationModal"

export const MainDash = () => {
  const { getAccessTokenSilently } = useAuth0()
  const [cruzPoints, setCruzPoints] = useState<number>(0)
  const [attendanceStatus, setAttendanceStatus] =
    useState<AttendanceStatus>("NOT CONFIRMED")
  const [render, setRender] = useState<boolean>(false)
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false)

  useEffect(() => {
    getHackerProfile(
      getAccessTokenSilently,
      setCruzPoints,
      setAttendanceStatus
    ).then(() => setRender(true))
  }, [])

  if (render) {
    return (
      <div className='maindash'>
        <div className='maindash__container'>
          <ConfirmationModal
            open={confirmationModalOpen}
            setOpen={setConfirmationModalOpen}
            header={"CONFIRM ATTENDANCE"}
            body={`Please confirm if you are going to be able to 
              make it to CruzHacks 2023 so that we can start 
              planning accordingly to make CruzHacks the best 
              experience for you!`}
            primaryButtonText={"Confirm"}
            primaryButtonHandler={() =>
              confirmAttendance(
                getAccessTokenSilently,
                "CONFIRMED",
                setAttendanceStatus
              )
            }
            secondaryButtonText={"I will not be attending"}
            secondaryButtonHandler={() =>
              confirmAttendance(
                getAccessTokenSilently,
                "NOT ATTENDING",
                setAttendanceStatus
              )
            }
          />
          <HackerDashWelcome
            cruzPoints={cruzPoints}
            setCruzPoints={setCruzPoints}
            enableCruzPoints={attendanceStatus === "CONFIRMED"}
          />
          <div className='maindash__container--row'>
            <div className='maindash__container--column'>
              <HackerStatus
                attendanceStatus={attendanceStatus}
                setConfirmationModalOpen={setConfirmationModalOpen}
                setAttendanceStatus={setAttendanceStatus}
              />
              {/* <Submission canSubmit={false} /> */}
            </div>
            <Leaderboard />
          </div>
        </div>
        <div className='maindash__lower-container'>
          <Checklist
            attendanceStatus={attendanceStatus}
            setAttendanceStatus={setAttendanceStatus}
            setConfirmationModalOpen={setConfirmationModalOpen}
          />
          <ImportantDates />
        </div>
      </div>
    )
  } else {
    return null
  }
}

const Checklist = (props: {
  attendanceStatus: AttendanceStatus
  setAttendanceStatus: Dispatch<AttendanceStatus>
  setConfirmationModalOpen: Dispatch<boolean>
}) => {
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
          onClick={() => props.setConfirmationModalOpen(true)}
          isUnclickable={props.attendanceStatus !== "NOT CONFIRMED"}
          unClickableText={
            props.attendanceStatus === "CONFIRMED"
              ? "Accepted"
              : "Not Attending"
          }
        />
        <ChecklistItem
          key={checklistProps[1].checklistNum}
          checklistNum={checklistProps[1].checklistNum}
          title={checklistProps[1].title}
          message={checklistProps[1].message}
          buttonText={checklistProps[1].buttonText}
          onClick={() => {}}
          isUnclickable={checklistProps[1].isUnclickable}
          unClickableText={checklistProps[1].unClickableText}
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
