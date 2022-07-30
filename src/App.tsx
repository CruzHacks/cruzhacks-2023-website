import React from "react"
import Landing from "./views/Landing/index.view"
import ErrorView from "./views/Error/index.view"
import "./App.scss"
import { Routes, Route } from "react-router-dom"

const App: React.FC = () => (
  <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='*' element={<ErrorView />} />
  </Routes>
)

export default App
