import React, { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link, useLocation } from "react-router-dom"
import Login from "../Login/index"
import Logout from "../Logout/index"
import ThemeSlider from "./ThemeSlider"
import { ReactComponent as CruzHacksLogo } from "../../assets/CruzHacksLogo.svg"
import { ReactComponent as MLHTrustBadge2023 } from "../../assets/mlh.svg"

import "./index.scss"
import DropdownButton from "./DropdownButton"

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0()
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

  const [navHidden, setNavHidden] = useState(true)

  const page = useLocation().pathname

  const nav = (
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
      <span className='nav__container--right--item'>{auth()}</span>
      <div className='nav__container--right--item'>
        <img
          src={process.env.PUBLIC_URL + "/logo_MLH-main-white.svg"}
          alt='Major League Hacking Logo'
        />
      </div>
    </>
  )

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

  return (
    <nav className='nav'>
      <div className='nav__container'>
        <div className='nav__container--left'>
          <Link to='/'>
            <CruzHacksLogo className='logo' />
          </Link>
          <ThemeSlider />
        </div>
        <div className='nav__container--right'>
          {windowWidthHeight[0] <= 600 ? dropDown : nav}
        </div>
        <div className='badge_container'>
          <MLHTrustBadge2023 className='mlh_badge' />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
