import React, { useState } from "react"
import { subscribeMailchimp } from "../../../utils/api"
import { validateEmail } from "../../../utils/validate"
import "./index.scss"
import { ReactComponent as Arrow } from "../../../assets/Arrow.svg"
import { ReactComponent as Instagram } from "../../../assets/Instagram.svg"
import { ReactComponent as Facebook } from "../../../assets/Facebook.svg"
import { ReactComponent as LinkedIn } from "../../../assets/Linkedin.svg"
import { ReactComponent as Twitter } from "../../../assets/Twitter.svg"
import { ReactComponent as Discord } from "../../../assets/Discord.svg"

const SubmissionStates = {
  NotSubmitted: 0,
  Loading: 1,
  Submitted: 2,
  Errored: 3,
}

interface SocialButtonProps {
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const SocialButton = (props: SocialButtonProps) => (
  <button className='social_button'>
    <props.logo className='social_button--svg' />
  </button>
)

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
    <div className='landing'>
      <div className='landing__container'>
        <div className='landing__container--title'>CRUZHACKS 2023</div>
        <div className='landing__container--blurb'>
          CruzHacks is the largest hackathon in Santa Cruz. Each year, we invite
          hundreds of students to develop solutions to real-world problems,
          pursue inclusion in tech, and kindle the spirit of innovation.
        </div>
        <div className='landing__container--inputs'>
          <div className='landing__container--inputs__row-container'>
            <div className='landing__container--inputs__row-container__row1'>
              <input
                //eslint-disable-next-line max-len
                className='landing__container--inputs__row-container__row1--email-input'
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter Email for updates'
              ></input>
              {/*eslint-disable-next-line max-len*/}
              <div className='landing__container--inputs__row-container__row1__arrow-container'>
                <button
                  // eslint-disable-next-line max-len
                  className='landing__container--inputs__row-container__row1__arrow-container--arrow'
                  onClick={() => handleSubmit()}
                >
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
          <div className='landing__container--inputs__row2'>
            <button className='landing__container--inputs__row2--button1'>
              Sponsor Us
            </button>
            <button className='landing__container--inputs__row2--button2'>
              Apply
            </button>
          </div>
        </div>
        {message && (
          <div
            className={
              "landing__container--res" + (state === 3 ? "__error" : "")
            }
          >
            {message}
          </div>
        )}
      </div>
      <div className='landing__socials'>
        <SocialButton logo={Instagram} />
        <SocialButton logo={Facebook} />
        <SocialButton logo={LinkedIn} />
        <SocialButton logo={Twitter} />
        <SocialButton logo={Discord} />
      </div>
    </div>
  )
}

export default Landing
