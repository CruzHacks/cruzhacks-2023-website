import React from "react"
import "./Submission.scss"

export const Submission = (props: { canSubmit: boolean }) => {
  return (
    <div className='submission__container'>
      <div className='submission__container__title'>Ready To Submit?</div>
      <div className='submission__container__message'>
        Submit your project here and get ready to present your pitch!
      </div>
      <button
        className={`submission__container__submit-button--${props.canSubmit}`}
        disabled
      >
        Submit
      </button>
    </div>
  )
}
