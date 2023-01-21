import React, { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { QrReader } from "react-qr-reader"
import "./index.scss"

const QRCheckIn: React.FC = () => {
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
              //display: "flex",
              width: "80%",
              //height: "100%",
              //borderRadius: "12px",
            }}
            onResult={(result, error) => {
              if (result) {
                // checkin
              }

              if (error) {
                console.info(error)
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default QRCheckIn
