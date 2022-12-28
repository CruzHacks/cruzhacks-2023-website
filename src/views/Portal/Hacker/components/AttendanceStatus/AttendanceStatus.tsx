import React from "react"
import "./AttendanceStatus.scss"

export const AttendanceStatus: React.FC = () => {
  return (
    <div className='attendance'>
      <div className='attendance__container'>
        <div className='attendance__container__application'>
          <div className='attendance__container__application--text'>
            Application Status:
          </div>
          <div className='attendance__container__application--status'>
            ACCEPTED
          </div>
        </div>
        <div className='attendance__container__attendance'>
          <div className='attendance__container__attendance--text'>
            Attendance Status:
          </div>
          <div className='attendance__container__attendance--status'>
            NOT CONFIRMED
          </div>
          <button className='attendance__container__attendance--confirm-button'>
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}
