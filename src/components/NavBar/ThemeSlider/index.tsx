import React from "react"
import { useTheme } from "../../../contexts/ThemeContext/ThemeContext"

import "./index.scss"

const ThemeSlider: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='toggle'>
      <input
        type='checkbox'
        id='toggle'
        className='toggle--checkbox'
        onClick={() => toggleTheme()}
        checked={theme.mode == "dark" ? true : false}
        readOnly
      />
      <label htmlFor='toggle' className='toggle--label'>
        <span className='toggle--label-background'></span>
      </label>
    </div>
  )
}

export default ThemeSlider
