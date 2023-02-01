import React, { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useTheme } from "../../contexts/ThemeContext/ThemeContext"
import { Link, useLocation } from "react-router-dom"
import Login from "../Login/index"
import Logout from "../Logout/index"
import ThemeSlider from "./ThemeSlider"
import { ReactComponent as CruzHacksLogo } from "../../assets/CruzHacksLogo.svg"
import { ReactComponent as MLHTrustBadge2023 } from "../../assets/mlhtrust.svg"

import "./index.scss"
import DropdownButton from "./DropdownButton"

const NavBar: React.FC = () => {
  const { isAuthenticated, user } = useAuth0()
  const [navHidden, setNavHidden] = useState(true)
  const { theme, forceTheme, revertTheme } = useTheme()
  const [portalView, setPortalView] = useState(false)

  const userRoles = (user && user[`https://cruzhacks.com/roles`]) || []
  const role = userRoles.length > 0 ? userRoles[0] : ""

  const page = useLocation().pathname
  const re = new RegExp("portal", "g")
  const auth = () => {
    if (isAuthenticated) return <Logout location={window.location.origin} />
    else return <Login />
  }
  const [windowWidthHeight, setWidthHeight] = useState<number[]>([501, 500])

  useEffect(() => {
    setWidthHeight([window.innerWidth, window.innerHeight])
  }, [])
  useEffect(() => {
    function handleResize() {
      setWidthHeight([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const baseNav = (
    <>
      <Link
        className={
          "nav__container--right--item " + (page == "/" ? "active" : "")
        }
        to='/'
      >
        <span className='nav__container--right--item__link'>Home</span>
      </Link>
      <Link
        className={
          "nav__container--right--item " + (page == "/team" ? "active" : "")
        }
        to='/team'
      >
        <span className='nav__container--right--item__link'>About Us</span>
      </Link>
      {isAuthenticated && (
        <Link
          className={
            "nav__container--right--item " + (page == "/portal" ? "active" : "")
          }
          to='/redirect'
        >
          <span className='nav__container--right--item__link'>Portal</span>
        </Link>
      )}
      <span className='nav__container--right--item'>{auth()}</span>
    </>
  )

  const userId = user && user.nickname

  const adminNav = (
    <>
      <Link
        className={
          "nav__container--right--item " +
          (page == `/portal/admin/${userId}` ? "active" : "")
        }
        to='../dashboard'
        relative='path'
      >
        <span className='nav__container--right--item__link'>Dashboard</span>
      </Link>
      <Link
        className={
          "nav__container--right--item " +
          (page == `/portal/admin/${userId}/users` ? "active" : "")
        }
        to='../users'
        relative='path'
      >
        <span className='nav__container--right--item__link'>
          User Management
        </span>
      </Link>
      <Link
        className='nav__container--right--item'
        to='../live'
        relative='path'
      >
        <span className='nav__container--right--item__link logout__button'>
          CruzHacks Live
        </span>
      </Link>
      <span className='nav__container--right--item'>
        <Logout location={window.location.origin} />
      </span>
    </>
  )
  const hackerNav = (
    <>
      <Link
        className={
          "nav__container--right--item " +
          (page == `/portal/hacker/${userId}/dashboard` ? "active" : "")
        }
        to='../dashboard'
        relative='path'
      >
        <span className='nav__container--right--item__link'>Dashboard</span>
      </Link>
      <Link
        className={
          "nav__container--right--item " +
          (page == `/portal/hacker/${userId}/team` ? "active" : "")
        }
        to='../team'
        relative='path'
      >
        <span className='nav__container--right--item__link'>Team</span>
      </Link>
      <Link
        className='nav__container--right--item'
        to='../live'
        relative='path'
      >
        <span className='nav__container--right--item__link logout__button'>
          CruzHacks Live
        </span>
      </Link>
      <span className='nav__container--right--item'>
        <Logout location={window.location.origin} />
      </span>
      {/**
       * TODO: HackerPack link
       */}
    </>
  )
  const route = page.match(re)
  useEffect(() => {
    if (route && route[0] === "portal") {
      if (theme.mode !== "portal") forceTheme()
      if (!portalView) setPortalView(true)
    } else {
      if (theme.mode === "portal") revertTheme()
      if (portalView) setPortalView(false)
    }
  }, [page])
  let nav
  if (route && route[0] === "portal") {
    if (role === "Organizer") {
      nav = adminNav
    } else {
      nav = hackerNav
    }
  } else {
    nav = baseNav
  }

  // TODO: https://codepen.io/tonkec/pen/XXgdoo?editors=1100
  const dropDown = (
    <>
      <DropdownButton
        onClick={() => setNavHidden(!navHidden)}
        checked={!navHidden}
      ></DropdownButton>
      <div
        className={
          "nav__container--right__dropdown " + (navHidden ? "hidden" : "")
        }
      >
        {nav}
      </div>
    </>
  )

  const MLHbadge = (
    <div className='badge_container'>
      <MLHTrustBadge2023 className='mlh_badge' />
    </div>
  )

  const landingLeft = (
    <>
      <Link to='/'>
        <CruzHacksLogo className='logo' />
      </Link>
      <ThemeSlider />
    </>
  )

  const portalLeft = (
    <>
      <Link to='/'>
        <span className='portal-full-logo'>
          <CruzHacksLogo className='logo' />
          <div className='logo-title'>CRUZHACKS</div>
        </span>
      </Link>
    </>
  )

  return (
    <nav className='nav'>
      <div className='nav__container'>
        <div className='nav__container--left'>
          {portalView ? portalLeft : landingLeft}
        </div>
        <div className='nav__container--right'>
          {windowWidthHeight[0] <= 700 ? dropDown : nav}
        </div>
        {!portalView && navHidden && MLHbadge}
      </div>
    </nav>
  )
}

export default NavBar
