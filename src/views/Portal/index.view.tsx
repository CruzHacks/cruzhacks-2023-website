import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { SnackbarProvider, useSnackbar } from "notistack"
import { initializeApp } from "firebase/app"
import {
  connectDatabaseEmulator,
  getDatabase,
  onValue,
  ref,
} from "firebase/database"
import { styled } from "@mui/material"
import "./index.scss"

const config = process.env.REACT_APP_FIREBASE_CONFIG || ""

const firebaseConfig = JSON.parse(config)
export const app = initializeApp(firebaseConfig)

const StyledSnackbarProvider = styled(SnackbarProvider)`
  &.SnackbarItem-contentRoot {
    background-color: #1b1b37;
  }
`

const buildAnnouncement = (body: string) => (
  <div className='announcement'>
    <div className='announcement-title'>Live Update</div>
    <span className='announcement-sep'></span>
    <div className='announcement-body'>{body}</div>
  </div>
)

const PortalWithNotify: React.FC = () => {
  const [isNotificationEnabled, setNotificationEnabled] = useState(false)
  const { getAccessTokenSilently } = useAuth0()
  const { enqueueSnackbar } = useSnackbar()

  const db = getDatabase(app)
  if (location.hostname === "localhost") {
    connectDatabaseEmulator(db, "localhost", 9000)
  }

  // Update announcements
  useEffect(() => {
    const announcements = ref(db, "Announcements")
    return onValue(announcements, snapshot => {
      const data = snapshot.val()

      if (snapshot.exists()) {
        const latestUpdate: any = Object.values(data).reverse()[0]
        enqueueSnackbar(buildAnnouncement(latestUpdate.body), {
          preventDuplicate: true,
        })
      }
    })
  }, [])

  return <Outlet />
}

import { Outlet } from "react-router-dom"

const Portal = () => (
  <StyledSnackbarProvider maxSnack={3}>
    <PortalWithNotify />
  </StyledSnackbarProvider>
)

export default Portal
