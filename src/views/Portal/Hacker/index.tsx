import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const HackerDash: React.FC = () => {
  const { user } = useAuth0()
  return (
    <div className='hackerdash__container'>Welcome, {user && user.name}!</div>
  )
}

export default HackerDash
