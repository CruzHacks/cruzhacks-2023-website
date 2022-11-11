import React from "react"
import ShootingStars from "./ShootingStars/ShootingStars"
import "./index.scss"
const NightSky: React.FC = () => (
  <div className='NightSky__container'>
    <ShootingStars />
    <ShootingStars />
    <ShootingStars />
  </div>
)

export default NightSky
