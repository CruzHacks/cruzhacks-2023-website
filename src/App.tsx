import React from "react"
import Landing from "./views/Landing/index.view"
import ErrorView from "./views/Error/index.view"
import "./App.scss"
import { Routes, Route } from "react-router-dom"

const App: React.FC = () => (
  <div className='App'>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='*' element={<ErrorView />} />
    </Routes>
  </div>
)

export default App
