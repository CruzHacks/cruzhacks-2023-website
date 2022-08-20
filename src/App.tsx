import React from "react"
import Landing from "./views/Landing/index.view"
import ErrorView from "./views/Error/index.view"
import Team from "./views/Team/index.view"
import Navbar from "./components/Navbar"
import "./App.scss"
import { Routes, Route } from "react-router-dom"

const App: React.FC = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='*' element={<ErrorView />} />
      <Route path='team' element={<Team />} />
    </Routes>
    <Navbar />
  </div>
)

export default App
