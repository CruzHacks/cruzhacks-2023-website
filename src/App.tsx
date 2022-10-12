import React from "react"
import Home from "./views/Home/index.view"
import ErrorView from "./views/Error/index.view"
import Team from "./views/Team/index.view"
import NavBar from "./components/NavBar/NavBar"
import "./App.scss"
import { Routes, Route } from "react-router-dom"
import ThemeController from "./components/ThemeController"

const App: React.FC = () => (
  <div className='app'>
    <ThemeController>
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<ErrorView />} />
          <Route path='team' element={<Team />} />
        </Routes>
      </>
    </ThemeController>
  </div>
)

export default App
