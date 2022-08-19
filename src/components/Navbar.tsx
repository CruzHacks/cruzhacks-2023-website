import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => (
  <nav className='nav'>
    <ul>
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
