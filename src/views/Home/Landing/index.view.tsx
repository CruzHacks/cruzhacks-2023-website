import React, { useState } from "react"
import { subscribeMailchimp } from "../../../utils/api"
import { validateEmail } from "../../../utils/validate"
import "./index.scss"

const SubmissionStates = {
  NotSubmitted: 0,
  Loading: 1,
  Submitted: 2,
  Errored: 3,
}

const Landing: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [state, setState] = useState<number>(0)
  const [message, setMessage] = useState<string>("")

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setState(SubmissionStates.Errored)
      setMessage("Please enter a valid email address.")
      return
    }
    setState(SubmissionStates.Loading)
    setMessage("Submitting...")
    subscribeMailchimp(email).then(res => {
      if (res.status === 200 || res.status === 201) {
        setState(SubmissionStates.Submitted)
        setMessage(res.data.message)
      } else {
        setState(SubmissionStates.Errored)
        setMessage(
          "Oh no! We've got an error— please try your request again & contact" +
            " us at dev@cruzhacks.com if this persists!"
        )
      }
    })
  }
  return (
    <div className='landing__container'>
      <div className='landing__container--title'>CruzHacks 2023</div>
      <div className='landing__container--blurb'>A tiny blurb about us</div>
      <div className='landing__container--when'>When is it</div>
      <div className='landing__container--where'>Where is it</div>
      <div className='landing__container--inputs'>
        <div className='landing__container--inputs__row1'>
          <input
            className='landing__container--inputs__row1--button1'
            onChange={e => setEmail(e.target.value)}
          />
          <button
            className='landing__container--inputs__row1--button2'
            onClick={() => handleSubmit()}
          >
            --&gt;
          </button>
        </div>
        <div className='landing__container--inputs__row2'>
          <button className='landing__container--inputs__row2--button1'>
            Apps Open Dec
          </button>
          <button className='landing__container--inputs__row2--button2'>
            Sponsor Us
          </button>
        </div>
      </div>
      {message && (
        <div
          className={"landing__container--res" + (state === 3 ? "__error" : "")}
        >
          {message}
        </div>
      )}
    </div>
  )
}

export default Landing
