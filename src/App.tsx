import React from "react"
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory"
import Home from "./views/Home/index.view"
import ErrorView from "./views/Error/index.view"
import Team from "./views/Team/index.view"
import NavBar from "./components/NavBar"
import "./App.scss"
import { Routes, Route } from "react-router-dom"
import ThemeProvider from "./contexts/ThemeContext/ThemeContext"
import Footer from "./components/Footer"

import "./App.scss"

const App: React.FC = () => {
  return (
    <div className='app'>
      <Auth0ProviderWithHistory
        domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
        clientId={process.env.REACT_APP_AUTH0_CLIENTID || ""}
        audience={process.env.REACT_APP_AUTH0_AUDIENCE || ""}
        redirectUri={window.location.origin}
      >
        <ThemeProvider>
          <>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<ErrorView />} />
              <Route path='team' element={<Team />} />
            </Routes>
            <Footer />
          </>
        </ThemeProvider>
      </Auth0ProviderWithHistory>
    </div>
  )
}

export default App
