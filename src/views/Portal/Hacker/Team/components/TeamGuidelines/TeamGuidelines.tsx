import React from "react"
import "./TeamGuidelines.scss"
export const TeamGuidelines = () => {
  return (
    <div className='teamguidelines__container'>
      <div className='teamguidelines__container__header'>Team Guidelines</div>
      <ul className='teamguidelines__container__guidelines'>
        <li className='teamguidelines__container__guidelines--bullet'>
          Must be comprised of 1-5 hackers
        </li>
        <li className='teamguidelines__container__guidelines--bullet'>
          The project must completed at the event
        </li>
        <li className='teamguidelines__container__guidelines--bullet'>
          All members must be a confirmed attendee
        </li>
        <li className='teamguidelines__container__guidelines--bullet'>
          Please keep names appropriate or all members will be disqualified
        </li>
      </ul>
    </div>
  )
}
