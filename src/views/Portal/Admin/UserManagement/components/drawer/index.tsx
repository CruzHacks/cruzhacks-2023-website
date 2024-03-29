import React, { useEffect, useState, Dispatch } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import "./index.scss"
import { HackerDrawerProps } from "../table/index"
import getHackers, { checkIn, rsvp } from "../api"
import { Drawer } from "@mui/material"
import {
  useBanner,
  Message,
} from "../../../../../../contexts/PortalBanners/PortalBanner"
import exit from "../../../../../../assets/Exit.svg"

const handleCheckIn = async (
  getAccessTokenSilently: any,
  setBanner: Dispatch<Message>,
  setHackers: Dispatch<Array<any>>,
  id: string
) => {
  await checkIn(getAccessTokenSilently, setBanner, id)
  await getHackers(getAccessTokenSilently, setBanner, setHackers)
}

const handleRSVP = async (
  getAccessTokenSilently: any,
  setBanner: Dispatch<Message>,
  setHackers: Dispatch<Array<any>>,
  id: string
) => {
  await rsvp(getAccessTokenSilently, setBanner, id)
  await getHackers(getAccessTokenSilently, setBanner, setHackers)
}

const HackerProfileDrawer = ({
  drawerOpen,
  setDrawerOpen,
  setHackers,
  props,
}: HackerDrawerProps) => {
  console.log({ props })
  const { getAccessTokenSilently } = useAuth0()
  const { setBanner } = useBanner()
  const [windowWidth, setWidth] = useState<number>(500)

  const handleDrawerWidth = () => {
    if (windowWidth > 992) {
      return windowWidth / 5
    }
    if (windowWidth <= 992) {
      return windowWidth / 3 + 100
    }
    if (windowWidth <= 500) {
      return windowWidth / 2 + 100
    }
    return 320
  }

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Drawer
      anchor={"right"}
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      onClick={event => {
        event.stopPropagation()
      }}
      PaperProps={{
        sx: { width: handleDrawerWidth },
      }}
    >
      {
        <div className='drawer__container'>
          <div className='drawer__container--exit'>
            <div
              onClick={() => setDrawerOpen(false)}
              className='drawer__container--exit--button'
            >
              <img src={exit} />
            </div>
          </div>
          <div className='drawer__container--profile-circle'>
            {props.firstName[0]}
            {props.lastName[0]}
          </div>
          <div className='drawer__container--text'>
            <div className='drawer__container--text--name'>
              {props.firstName} {props.lastName}
            </div>
            <div className='drawer__container--text--hacker'>HACKER</div>
            <div className='drawer__container--text--email'>
              <div className='drawer__container--text--email--title'>
                Email:
              </div>
              <div className='drawer__container--text--email--text'>
                {props.email}
              </div>
            </div>
          </div>
          <div
            className='drawer__container--checkIn'
            onClick={() =>
              handleCheckIn(
                getAccessTokenSilently,
                setBanner,
                setHackers,
                props.id
              )
            }
          >
            Check In
          </div>
          <div
            className='drawer__container--rsvp'
            onClick={() =>
              handleRSVP(
                getAccessTokenSilently,
                setBanner,
                setHackers,
                props.id
              )
            }
          >
            RSVP
          </div>
        </div>
      }
    </Drawer>
  )
}

export default HackerProfileDrawer
