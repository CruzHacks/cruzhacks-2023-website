import React from "react"
import Home from "./views/Home/index.view"
import ErrorView from "./views/Error/index.view"
import Team from "./views/Team/index.view"
import NavBar from "./components/NavBar/NavBar"
import "./App.scss"
import { Routes, Route } from "react-router-dom"

const App: React.FC = () => (
  <div className='App'>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<ErrorView />} />
      <Route path='team' element={<Team />} />
    </Routes>
  </div>
)

export default App
