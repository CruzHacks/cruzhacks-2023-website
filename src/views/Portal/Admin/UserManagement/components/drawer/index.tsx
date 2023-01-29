import React, { Dispatch, useEffect, useState } from "react"
import "./index.scss"
import { HackerProps } from "../api"
import { HackerDrawerProps } from "../table/index"
import { Drawer } from "@mui/material"
import exit from "../../../../../../assets/Exit.svg"

const HackerProfileDrawer = ({
  drawerOpen,
  setDrawerOpen,
  props,
}: HackerDrawerProps) => {
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
          <div className='drawer__container--checkIn'>Check In</div>
        </div>
      }
    </Drawer>
  )
}

export default HackerProfileDrawer
