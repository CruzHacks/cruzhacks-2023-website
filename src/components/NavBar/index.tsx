import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link, useLocation } from "react-router-dom"
import Login from "../Login/index"
import Logout from "../Logout/index"
import ThemeSlider from "../ThemeSlider"

import "./index.scss"

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0()
  const auth = () => {
    if (isAuthenticated) return <Logout location={window.location.origin} />
    else return <Login />
  }

  const page = useLocation().pathname
  console.log(page)

  return (
    <nav className='nav__container'>
      <div className='nav__container--left'>
        <img
          src={process.env.PUBLIC_URL + "/logo_cruzhacks-main-white.svg"}
          alt='CruzHacks Logo'
        />
        <ThemeSlider />
      </div>
      <div className='nav__container--right'>
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
      </div>
    </nav>
  )
}

export default NavBar
