import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
import Login from "../Login/index"
import Logout from "../Logout/index"
import { useTheme } from "../../contexts/ThemeContext/ThemeContext"
import "./NavBar.scss"

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0()
  const [theme, toggleTheme] = useTheme()
  const auth = () => {
    if (isAuthenticated) return <Logout location={window.location.origin} />
    else return <Login />
  }

  const themeToggle = (
    <button
      className='nav__container--items__themeToggle'
      onClick={() => toggleTheme()}
    >
      {theme.mode === "dark" ? "light" : "dark"}
    </button>
  )
  return (
    <nav className='nav__container'>
      <ul className='nav__container--items'>
        <li>{themeToggle}</li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/team'>Team</Link>
        </li>
        <li>{auth()}</li>
      </ul>
    </nav>
  )
}

export default NavBar
