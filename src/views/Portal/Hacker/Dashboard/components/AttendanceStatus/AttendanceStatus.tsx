import React, { Dispatch, useState } from "react"
import "./AttendanceStatus.scss"
import { confirmAttendance } from "../../api"
import { useAuth0 } from "@auth0/auth0-react"
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal"

export type AttendanceStatus = "NOT CONFIRMED" | "CONFIRMED" | "NOT ATTENDING"

interface AttendanceStatusProps {
  attendanceStatus: AttendanceStatus
  setConfirmationModalOpen: Dispatch<boolean>
  setAttendanceStatus: Dispatch<AttendanceStatus>
}

export const HackerStatus: React.FC<AttendanceStatusProps> = (
  props: AttendanceStatusProps
) => {
  const { attendanceStatus, setConfirmationModalOpen } = props
  const { getAccessTokenSilently } = useAuth0()
  const [openWithdrawModal, setOpenWithdrawModal] = useState<boolean>(false)
  const attendanceStatusModifier = (attendanceStatus: AttendanceStatus) => {
    switch (attendanceStatus) {
      case "NOT CONFIRMED":
        return "NOT-CONFIRMED"
      case "NOT ATTENDING":
        return "NOT-ATTENDING"
      case "CONFIRMED":
        return "CONFIRMED"
      default:
        return "NOT-CONFIRMED"
    }
  }

  return (
    <div className='attendance'>
      <ConfirmationModal
        open={openWithdrawModal}
        setOpen={setOpenWithdrawModal}
        header={"WITHDRAW ATTENDANCE"}
        body={`Please withdraw if you are going to 
          be unable to make it to CruzHacks 2023 
          so that a hacker on the waitlist can 
          take your spot!`}
        primaryButtonText={"Withdraw"}
        primaryButtonHandler={() =>
          confirmAttendance(
            getAccessTokenSilently,
            "NOT ATTENDING",
            props.setAttendanceStatus
          )
        }
        secondaryButtonText={"I will still be attending"}
        secondaryButtonHandler={() => setOpenWithdrawModal(false)}
      />
      <div className='attendance__container'>
        <div className='attendance__container__application'>
          <div className='attendance__container__application--text'>
            Application Status:
          </div>
          <div className='attendance__container__application__status'>
            ACCEPTED
          </div>
        </div>
        <div className='attendance__container__attendance'>
          <div className='attendance__container__attendance--text'>
            Attendance Status:
          </div>
          <div
            // eslint-disable-next-line max-len
            className={`attendance__container__attendance__status--${attendanceStatusModifier(
              attendanceStatus
            )}`}
          >
            {attendanceStatus}
          </div>
          {attendanceStatus === "NOT CONFIRMED" ? (
            <button
              className='attendance__container__attendance--confirm-button'
              onClick={() => setConfirmationModalOpen(true)}
            >
              Confirm
            </button>
          ) : null}
        </div>
        {attendanceStatus === "CONFIRMED" ? (
          <div className='attendance__container__attendance__withdraw'>
            <div className='attendance__container__attendance__withdraw--text'>
              Can&apos;t make it anymore?
            </div>
            <button
              className='attendance__container__attendance__withdraw--button'
              onClick={() => setOpenWithdrawModal(true)}
            >
              Withdraw here
            </button>
          </div>
        ) : null}
        <div></div>
      </div>
    </div>
  )
}
