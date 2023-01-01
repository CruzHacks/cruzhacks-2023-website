import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate, Outlet } from "react-router-dom"

const Portal = () => {
  const { user } = useAuth0()
  const navigate = useNavigate()
  console.log(user)
  React.useEffect(() => {
    const userRoles = (user && user[`https://cruzhacks.com/roles`]) || []
    const nickname = user && user.nickname
    if (userRoles.indexOf("Hacker") != -1) navigate(`hacker/${nickname}/team`)
    else if (userRoles.indexOf("Organizer") != -1)
      navigate(`admin/${nickname}/dashboard`)
    else navigate("error")
  }, [])
  return <Outlet />
}

export default Portal
