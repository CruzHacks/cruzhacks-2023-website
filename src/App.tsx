import React from "react"
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory"
import { useAuth0 } from "@auth0/auth0-react"
import ThemeProvider from "./contexts/ThemeContext/ThemeContext"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import PrivateRoute from "./auth/PrivateRoute"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./views/Home/index.view"
import Team from "./views/Team/index.view"
import Portal from "./views/Portal/index.view"
import TeamFormation from "./views/Portal/Hacker/Team"
import Support from "./views/Portal/Hacker/Support"
import { MainDash } from "./views/Portal/Hacker/Dashboard"
import AdminDash from "./views/Portal/Admin"
import UserManagement from "./views/Portal/Admin/UserManagement"
import ErrorView from "./views/Error/index.view"
import LivePlaceholder from "./views/LivePlaceholder/index.view"
import BGwrapper from "./components/BGwrapper"

import "./App.scss"

const LoginRedirect = () => {
  const { user } = useAuth0()
  const navigate = useNavigate()
  React.useEffect(() => {
    const userRoles = (user && user[`https://cruzhacks.com/roles`]) || []
    const nickname = user && user.nickname
    if (userRoles.indexOf("Hacker") != -1)
      navigate(`../portal/hacker/${nickname}/dashboard`)
    else if (userRoles.indexOf("Organizer") != -1)
      navigate(`../portal/admin/${nickname}/dashboard`)
    else navigate("error")
  }, [])
  return <>Loading ...</>
}

const App: React.FC = () => {
  React.useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    })
  }, [useLocation().pathname])
  const disableTeamBuilder = true

  return (
    <div className='app'>
      <Auth0ProviderWithHistory
        domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
        clientId={process.env.REACT_APP_AUTH0_CLIENTID || ""}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE || ""}
        redirectUri={`${window.location.origin}/redirect`}
      >
        <ThemeProvider>
          <>
            <NavBar />
            <Routes>
              <Route path='/' element={BGwrapper(Home)} />
              <Route path='team' element={BGwrapper(Team)} />
              <Route
                path='portal'
                element={<PrivateRoute component={<Portal />} />}
              >
                <Route
                  path='admin/:userId/dashboard'
                  element={
                    <PrivateRoute role='Organizer' component={<AdminDash />} />
                  }
                />
                <Route
                  path='admin/:userId/users'
                  element={
                    <PrivateRoute
                      role='Organizer'
                      component={<UserManagement />}
                    />
                  }
                />
                <Route
                  path='admin/:userId/live'
                  element={
                    <PrivateRoute
                      role='Organizer'
                      component={<LivePlaceholder />}
                    />
                  }
                />
                <Route
                  path='hacker/:userId/dashboard'
                  element={
                    <PrivateRoute role='Hacker' component={<MainDash />} />
                  }
                />
                {disableTeamBuilder && (
                  <Route
                    path='hacker/:userId/team'
                    element={
                      <PrivateRoute
                        role='Hacker'
                        component={<TeamFormation />}
                      />
                    }
                  />
                )}
                <Route
                  path='hacker/:userId/support'
                  element={
                    <PrivateRoute role='Hacker' component={<Support />} />
                  }
                />
                <Route
                  path='hacker/:userId/live'
                  element={
                    <PrivateRoute
                      role='Hacker'
                      component={<LivePlaceholder />}
                    />
                  }
                />
              </Route>
              <Route
                path='/redirect'
                element={<PrivateRoute component={<LoginRedirect />} />}
              />
              <Route path='*' element={<ErrorView />} />
            </Routes>
            <Footer />
          </>
        </ThemeProvider>
      </Auth0ProviderWithHistory>
    </div>
  )
}

export default App
