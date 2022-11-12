import React, { useState, Dispatch } from "react"
import { subscribeMailchimp } from "../../../utils/api"
import { validateEmail } from "../../../utils/validate"
import "./index.scss"
import { ReactComponent as Moon } from "../../../assets/Moon.svg"
import { ReactComponent as Sun } from "../../../assets/Sun.svg"
import { ReactComponent as Arrow } from "../../../assets/Arrow.svg"
import { SocialButton } from "../../../components/Button/SocialButton"
import {
  SocialButtonInputs,
  SocialButtonProps,
} from "../../../Props/Socials/props"
import { useTheme } from "../../../contexts/ThemeContext/ThemeContext"
import { Modal, Box, SxProps } from "@mui/material"

const SubmissionStates = {
  NotSubmitted: 0,
  Loading: 1,
  Submitted: 2,
  Errored: 3,
}

const style: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "#13243c",
  border: "2px solid #243d5e",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
}

interface ApplicationModalProps {
  modalOpen: boolean
  setModalOpen: Dispatch<boolean>
}

const ApplicationModal = ({
  modalOpen,
  setModalOpen,
}: ApplicationModalProps) => {
  const openApplication = (link: string) => {
    window.open(link, "_blank")
  }

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby='apply modal'
      aria-describedby='choose application type'
    >
      <Box sx={style}>
        <div className='application-modal__container'>
          <div className='application-modal__container__title'>
            APPLICATION TYPE
          </div>
          <button
            onClick={() =>
              openApplication("https://forms.gle/RiY8GDxoCR1xmCbc7")
            }
            className='application-modal__container--button'
          >
            Hacker Application
          </button>
          <button
            onClick={() =>
              openApplication("https://forms.gle/ofzoJ9VVkZAEhnPv8")
            }
            className='application-modal__container--button'
          >
            Mentor / Judge Application
          </button>
          <button
            onClick={() =>
              openApplication("https://forms.gle/R9KtP8VMGGbfVTBx9")
            }
            className='application-modal__container--button'
          >
            Volunteer Application
          </button>
        </div>
      </Box>
    </Modal>
  )
}

const Landing: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const [state, setState] = useState<number>(0)
  const [message, setMessage] = useState<string>("")
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [theme] = useTheme()

  const isLightClass = () => (theme.mode === "light" ? "--light" : "")

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
      <div className='landing__badge'>
        <div className='landing__badge--icon'>
          {theme.mode === "light" ? (
            <Sun className='landing__badge--icon__sun' />
          ) : (
            <Moon className='landing__badge--icon__moon' />
          )}
          <div className='landing__badge--icon__socials'>
            {SocialButtonInputs.map(({ logo, link }: SocialButtonProps) => (
              <SocialButton logo={logo} link={link} key={link} />
            ))}
          </div>
        </div>
      </div>
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
                placeholder='Enter email for updates'
              ></input>
              {/*eslint-disable-next-line max-len*/}
              <div
                // eslint-disable-next-line max-len
                className={`landing__container--inputs__row-container__row1__arrow-container`}
              >
                <button
                  // eslint-disable-next-line max-len
                  className={`landing__container--inputs__row-container__row1__arrow-container--arrow${isLightClass()}`}
                  onClick={() => handleSubmit()}
                >
                  <Arrow className='arrow-icon' />
                </button>
              </div>
            </div>
          </div>
          <div className='landing__container--inputs__row2'>
            <button
              // eslint-disable-next-line max-len
              className={`landing__container--inputs__row2--button1${isLightClass()}`}
              onClick={e => {
                window.location.href = "mailto:sponsor@cruzhacks.com"
                e.preventDefault()
              }}
            >
              Sponsor Us
            </button>
            <button
              // eslint-disable-next-line max-len
              className={`landing__container--inputs__row2--button2${isLightClass()}`}
              onClick={() => setModalOpen(true)}
            >
              Apply
            </button>
            <ApplicationModal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
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
      <div className='landing__socials-mobile'>
        {SocialButtonInputs.map(({ logo, link }: SocialButtonProps) => (
          <SocialButton logo={logo} link={link} key={link} />
        ))}
      </div>
    </div>
  )
}

export default Landing
