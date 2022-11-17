import React from "react"
import Stars from "./Stars"
import Shooters from "./Shooters"
import Clouds from "./Clouds"
import "./index.scss"

const NightSky: React.FC = () => (
  <div className='NightSky__wrapper'>
    <div className='NightSky__container'>
      <Stars />
      <Shooters />
      <Shooters />
    </div>
    <Clouds />
  </div>
)

export default NightSky
