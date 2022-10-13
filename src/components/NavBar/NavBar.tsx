import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
import Login from "../Login/index"
import Logout from "../Logout/index"
import "./NavBar.scss"

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0()
  const auth = () => {
    if (isAuthenticated) return <Logout location={window.location.origin} />
    else return <Login />
  }
  return (
    <nav className='nav__container'>
      <ul className='nav__container--items'>
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
