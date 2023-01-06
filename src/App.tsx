import React from "react"
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory"
import ThemeProvider from "./contexts/ThemeContext/ThemeContext"
import { Routes, Route, useLocation } from "react-router-dom"
import PrivateRoute from "./auth/PrivateRoute"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./views/Home/index.view"
import Team from "./views/Team/index.view"
import Portal from "./views/Portal/index.view"
import HackerDash from "./views/Portal/Hacker"
import AdminDash from "./views/Portal/Admin/Dashboard"
import ErrorView from "./views/Error/index.view"
import BGwrapper from "./components/BGwrapper"

import "./App.scss"

const App: React.FC = () => {
  React.useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    })
  }, [useLocation().pathname])
  return (
    <div className='app'>
      <Auth0ProviderWithHistory
        domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
        clientId={process.env.REACT_APP_AUTH0_CLIENTID || ""}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE || ""}
        redirectUri={`${window.location.origin}/portal`}
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
                  path='admin/:uname/dashboard'
                  element={
                    <PrivateRoute role='Organizer' component={<AdminDash />} />
                  }
                />
                <Route
                  path='hacker/:uname/dashboard'
                  element={
                    <PrivateRoute role='Hacker' component={<HackerDash />} />
                  }
                />
              </Route>
              <Route path='*' element={BGwrapper(ErrorView)} />
            </Routes>
            <Footer />
          </>
        </ThemeProvider>
      </Auth0ProviderWithHistory>
    </div>
  )
}

export default App
