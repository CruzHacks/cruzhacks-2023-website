import React, { Dispatch, useState } from "react"
import "./AttendanceStatus.scss"
import { confirmAttendance } from "../../api"
import { useAuth0 } from "@auth0/auth0-react"
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal"
// eslint-disable-next-line max-len
import { useBanner } from "../../../../../../contexts/PortalBanners/PortalBanner"
import QRCode from "react-qr-code"
import { Box, Fade, Modal, SxProps } from "@mui/material"

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
  const { setBanner } = useBanner()
  const [openWithdrawModal, setOpenWithdrawModal] = useState<boolean>(false)
  const [openCheckInModal, setOpenCheckInModal] = useState<boolean>(false)
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
            props.setAttendanceStatus,
            setBanner
          )
        }
        secondaryButtonText={"I will still be attending"}
        secondaryButtonHandler={() => setOpenWithdrawModal(false)}
      />
      <CheckInModal open={openCheckInModal} setOpen={setOpenCheckInModal} />
      <div className='attendance__container'>
        <div className='attendance__container__checkin'>
          <button
            className='attendance__container__checkin--button'
            onClick={() => setOpenCheckInModal(true)}
          >
            Check In
          </button>
        </div>
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

const CheckInModal = (props: { open: boolean; setOpen: Dispatch<boolean> }) => {
  const { user } = useAuth0()
  const style: SxProps = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "white",
    border: "2px solid #243d5e",
    borderRadius: "10px",
    boxShadow: 24,
    p: 2,
  }
  return (
    <Modal open={props.open} onClose={() => props.setOpen(false)}>
      <Fade in={props.open}>
        <Box sx={style}>
          <div>
            <QRCode value={user?.sub || ""} />
          </div>
          <div className='qr-code__text'>
            {user?.given_name} {user?.family_name}
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}
