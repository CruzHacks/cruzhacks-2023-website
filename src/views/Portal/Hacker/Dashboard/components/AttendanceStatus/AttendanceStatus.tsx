import React from "react"
import "./AttendanceStatus.scss"

interface AttendanceStatusProps {
  attendanceStatus: boolean
  confirmHandler(): any
}

export const AttendanceStatus: React.FC<AttendanceStatusProps> = (
  props: AttendanceStatusProps
) => {
  const { confirmHandler, attendanceStatus } = props
  return (
    <div className='attendance'>
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
            className={`attendance__container__attendance__status--${attendanceStatus}`}
          >
            {attendanceStatus ? "CONFIRMED" : "NOT CONFIRMED"}
          </div>
          {!attendanceStatus ? (
            <button
              className='attendance__container__attendance--confirm-button'
              onClick={() => confirmHandler()}
            >
              Confirm
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
