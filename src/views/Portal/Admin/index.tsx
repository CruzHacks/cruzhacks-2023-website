import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

import "./index.scss"

const AdminDash: React.FC = () => {
  const { user } = useAuth0()
  return (
    <div className='admindash__container'>
      Welcome back, {user && user.name}
    </div>
  )
}

export default AdminDash
