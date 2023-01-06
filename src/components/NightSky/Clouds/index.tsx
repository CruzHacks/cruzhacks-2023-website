import React from "react"
import { ReactComponent as CloudDark } from "../../../assets/CloudDark.svg"
import { ReactComponent as CloudLight } from "../../../assets/CloudLight.svg"
import { useTheme } from "../../../contexts/ThemeContext/ThemeContext"
import "./index.scss"

const Clouds: React.FC = () => {
  const { theme } = useTheme()

  if (theme.mode === "dark") {
    return (
      <div className='clouds__container'>
        <div className='clouds'>
          <CloudDark className='cloud first' />
          <CloudDark className='cloud second' />
          <CloudDark className='cloud third' />
        </div>
      </div>
    )
  } else {
    return (
      <div className='clouds__container'>
        <div className='clouds'>
          <CloudLight className='cloud first' />
          <CloudLight className='cloud second' />
          <CloudLight className='cloud third' />
        </div>
      </div>
    )
  }
}

export default Clouds
