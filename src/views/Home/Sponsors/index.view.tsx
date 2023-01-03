import React from "react"
import { ReactComponent as SponsorsIcons } from "../../../assets/Sponsors.svg"
import "./index.scss"

const Sponsors: React.FC = () => (
  <div className='sponsors__container'>
    Thanks to our Sponsors!
    <div className='sponsors__container--icons'>
      <SponsorsIcons className='sponsorsIcons' />
    </div>
  </div>
)

export default Sponsors
