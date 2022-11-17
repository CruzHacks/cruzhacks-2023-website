import * as React from "react"
import { useAuth0 } from "@auth0/auth0-react"

import "./index.scss"

interface LogoutProps {
  location: string
}

const Logout: React.FC<LogoutProps> = ({ location }: LogoutProps) => {
  const { logout } = useAuth0()
  return (
    <button
      className='logout__button'
      type='button'
      onClick={() => logout({ returnTo: location })}
    >
      Logout
    </button>
  )
}

export default Logout
