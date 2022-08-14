import React from "react"
import PropTypes from "prop-types"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className='nav'>
      <ul>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/team'>Team</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
}
