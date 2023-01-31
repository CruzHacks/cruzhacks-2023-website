import React from "react"
import SpeakerCard from "../../../components/SpeakerCard/SpeakerCard"

import "./index.scss"

const Speakers = () => {
  return (
    <div className='speakers'>
      <div className='speakers__header'>SPEAKERS</div>
      <div className='speakers__cards'>
        <SpeakerCard />
        <SpeakerCard />
      </div>
    </div>
  )
}

export default Speakers
