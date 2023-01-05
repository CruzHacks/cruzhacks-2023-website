import { useAuth0 } from "@auth0/auth0-react"
import { Modal } from "@mui/material"
import { Box, SxProps } from "@mui/system"
import React, { Dispatch, useState } from "react"
import { ReactComponent as Exit } from "../../../../../../assets/Exit.svg"
import { submitCruzPointsCode } from "../../api"
import "./Welcome.scss"

interface WelcomeProps {
  cruzPoints: number
  setCruzPoints: Dispatch<number>
  enableCruzPoints: boolean
}

const CruzPointsCodeModal = (props: {
  open: boolean
  setOpen: Dispatch<boolean>
  setCruzPoints: Dispatch<number>
}) => {
  const style: SxProps = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    boxShadow: 24,
    height: "fit-content",
    minWidth: "400px",
    width: "30%",
    paddingBottom: 2,
  }

  const [code, setCode] = useState<string>("")
  const { getAccessTokenSilently } = useAuth0()
  return (
    <Modal open={props.open} onClose={() => props.setOpen(false)}>
      <Box sx={style}>
        <div className='cruzpoints__modal'>
          <div className='cruzpoints__modal__exit'>
            <button
              className='cruzpoints__modal__exit--button'
              onClick={() => props.setOpen(false)}
            >
              <Exit className='cruzpoints__modal__exit--button--svg' />
            </button>
          </div>
          <div className='cruzpoints__modal__header'>CruzPoints</div>
          <div className='cruzpoints__modal__subtext'>
            PLEASE ENTER UNIQUE CODE
          </div>
          <input
            className='cruzpoints__modal__code-box'
            type='text'
            onChange={e => setCode(e.target.value)}
          />
          <button
            className='cruzpoints__modal__submit-button'
            onClick={() => {
              submitCruzPointsCode(
                getAccessTokenSilently,
                code,
                props.setCruzPoints
              )
              props.setOpen(false)
            }}
          >
            Enter
          </button>
          <div className='cruzpoints__modal__explanation'>
            <div className='cruzpoints__modal__explanation__header'>
              What is CruzPoints
            </div>
            <div className='cruzpoints__modal__explanation__text'>
              CruzPoints is a point system that allows participants to earn
              points for hackathon prizes. After activities are completed,
              participants will be given a code to enter into their portal to
              validate points earned.
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  )
}

export const HackerDashWelcome: React.FC<WelcomeProps> = (
  props: WelcomeProps
) => {
  const { user } = useAuth0()
  const { cruzPoints, setCruzPoints } = props
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const handleEnterCodeButton = () => {
    if (props.enableCruzPoints) {
      setModalOpen(true)
    }
  }

  return (
    <div className='welcome__container'>
      <CruzPointsCodeModal
        open={modalOpen}
        setOpen={setModalOpen}
        setCruzPoints={setCruzPoints}
      />
      <div className='welcome__container--message'>
        Welcome, {user ? user.given_name : null}!
      </div>
      <div className='welcome__container__cruzpoints'>
        <div className='welcome__container__cruzpoints--text'>
          My CruzPoints:
        </div>
        <div className='welcome__container__cruzpoints--points'>
          {cruzPoints} pts
        </div>
        <button
          className={`welcome__container__cruzpoints--code-button${
            props.enableCruzPoints ? "" : "--disabled"
          }`}
          onClick={() => handleEnterCodeButton()}
        >
          Enter Code
        </button>
      </div>
    </div>
  )
}
