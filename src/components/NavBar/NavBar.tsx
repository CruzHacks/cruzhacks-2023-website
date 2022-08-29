import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.scss"

const NavBar: React.FC = () => (
  <nav className='nav__container'>
    <ul className='nav__container--items'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/team'>Team</Link>
      </li>
    </ul>
  </nav>
)

export default NavBar
