import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { SnackbarProvider, useSnackbar } from "notistack"
import { app, getTokenWrapper } from "../../firebase"
import { onMessage, getMessaging } from "firebase/messaging"
import { styled } from "@mui/material"
import "./index.scss"

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
  const { user, getAccessTokenSilently } = useAuth0()
  const { enqueueSnackbar } = useSnackbar()
  const messaging = getMessaging(app)
  onMessage(messaging, payload => {
    console.log(payload)
    if (payload && payload.notification && payload.notification.body)
      enqueueSnackbar(buildAnnouncement(payload.notification.body), {
        preventDuplicate: true,
      })
  })
  useEffect(() => {
    if (!isNotificationEnabled) {
      getAccessTokenSilently().then(accessToken =>
        getTokenWrapper(setNotificationEnabled, "Announcements", accessToken)
      )
    }
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
