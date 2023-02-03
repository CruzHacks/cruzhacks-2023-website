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
  width: "90%",
  height: "175px",
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
  height: "200px",
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

const handleCheckIn = (
  getAccessTokenSilently: any,
  setBanner: Dispatch<Message>,
  setModalOpen: Dispatch<boolean>,
  id: string
) => {
  checkIn(getAccessTokenSilently, setBanner, id)
  setModalOpen(false)
}

interface CheckInModalProps {
  modalOpen: boolean
  setModalOpen: Dispatch<boolean>
  setBanner: Dispatch<Message>
  getAccessTokenSilently: Dispatch<any>
  hacker: HackerQRProps
}

const CheckInModal = ({
  modalOpen,
  setModalOpen,
  setBanner,
  getAccessTokenSilently,
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
              <div
                onClick={() => setModalOpen(false)}
                className='checkin-modal__container--buttons--cancel'
              >
                Cancel
              </div>
              <div
                onClick={() =>
                  handleCheckIn(
                    getAccessTokenSilently,
                    setBanner,
                    setModalOpen,
                    hacker.id
                  )
                }
                className='checkin-modal__container--buttons--checkIn'
              >
                Check In
              </div>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

const handleModal = async (
  result: string,
  setHacker: Dispatch<HackerQRProps>,
  setModalOpen: Dispatch<boolean>,
  getAccessTokenSilently: Dispatch<any>,
  setBanner: Dispatch<Message>
) => {
  await getHacker(getAccessTokenSilently, setBanner, setHacker, result)
  setModalOpen(true)
}

const QRCheckIn: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const { getAccessTokenSilently } = useAuth0()
  const { setBanner } = useBanner()
  const [hacker, setHacker] = useState<HackerQRProps>({
    firstName: "",
    lastName: "",
    id: "",
  })

  return (
    <div className='qr__container'>
      <div className='qr__container--title'>
        <div className='qr__container--text'>QR Check In</div>
      </div>
      <div className='qr__container--box'>
        <div className='qr__container--camera'>
          <QrReader
            constraints={{ facingMode: "environment" }}
            containerStyle={{
              width: "80%",
            }}
            onResult={(result, error) => {
              if (result) {
                handleModal(
                  result?.getText(),
                  setHacker,
                  setModalOpen,
                  getAccessTokenSilently,
                  setBanner
                )
              }

              if (error) {
                console.info(error)
              }
            }}
          />
        </div>
        <CheckInModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          getAccessTokenSilently={getAccessTokenSilently}
          setBanner={setBanner}
          hacker={hacker}
        ></CheckInModal>
      </div>
    </div>
  )
}

export default QRCheckIn
