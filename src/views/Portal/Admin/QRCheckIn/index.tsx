import React, { useState, Dispatch } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { QrReader } from "react-qr-reader"
import {
  checkIn,
  getHacker,
  HackerQRProps,
} from "../UserManagement/components/api"
import {
  useBanner,
  Message,
} from "../../../../contexts/PortalBanners/PortalBanner"
import "./index.scss"

import { Modal, Fade, Box, SxProps } from "@mui/material"

const style1: SxProps = {
  width: "325px",
  height: "365px",
  bgcolor: "#FFFFFF",
  outline: "none",
  borderRadius: "6px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

const style2: SxProps = {
  width: "400px",
  height: "225px",
  bgcolor: "#FFFFFF",
  outline: "none",
  borderRadius: "6px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

const checkSize = () => {
  if (window.innerWidth <= 500) {
    return style1
  }
  return style2
}

interface CheckInModalProps {
  modalOpen: boolean
  setModalOpen: Dispatch<boolean>
  hacker: HackerQRProps
}

const CheckInModal = ({
  modalOpen,
  setModalOpen,
  hacker,
}: CheckInModalProps) => {
  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby='check in modal'
      aria-describedby='choose message for'
    >
      <Fade in={modalOpen}>
        <Box sx={checkSize}>
          <div className='checkin-modal__container'>
            <div className='checkin-modal__container--title'>
              Check in {hacker.firstName} {hacker.lastName}?
            </div>
            <div className='checkin-modal__container--buttons'>
              <div className='checkin-modal__container--buttons--cancel'>
                <a>Cancel</a>
              </div>
              <div className='checkin-modal__container--buttons--checkIn'>
                <a>Check In</a>
              </div>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

const handleCheckIn = (
  result: string,
  setId: Dispatch<string>,
  setHacker: Dispatch<HackerQRProps>,
  setModalOpen: Dispatch<boolean>,
  getAccessTokenSilently: Dispatch<any>,
  setBanner: Dispatch<Message>
) => {
  setId(result)
  getHacker(getAccessTokenSilently, setBanner, setHacker, result)
  setModalOpen(true)
}

const QRCheckIn: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const { getAccessTokenSilently } = useAuth0()
  //const [render, setRender] = useState<boolean>(false)
  const { setBanner } = useBanner()
  const [id, setId] = useState("No result")
  const [hacker, setHacker] = useState<HackerQRProps>({
    firstName: "dummy",
    lastName: "dummy",
    id: "dummy",
  })

  return (
    <div className='qr__container'>
      <div className='qr__container--title'>
        <div
          onClick={() =>
            handleCheckIn(
              "ID1",
              setId,
              setHacker,
              setModalOpen,
              getAccessTokenSilently,
              setBanner
            )
          }
          className='qr__container--text'
        >
          QR Check In
        </div>
      </div>
      <div className='qr__container--box'>
        <div className='qr__container--camera'>
          <QrReader
            constraints={{ facingMode: "environment" }}
            containerStyle={{
              //display: "flex",
              width: "80%",
              //height: "100%",
              //borderRadius: "12px",
            }}
            /*
            onResult={(result, error) => {
              if (result) {
                setId(result)
                getHacker(getAccessTokenSilently, setBanner, setHacker, id)
                setModalOpen(true)
              }

              if (error) {
                console.info(error)
              }
            }}
            */
          />
        </div>
        <CheckInModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          hacker={hacker}
        ></CheckInModal>
      </div>
    </div>
  )
}

export default QRCheckIn
