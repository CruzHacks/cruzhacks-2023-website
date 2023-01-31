import React from "react"
import "./SpeakerCard.scss"
import SatyaNadella from "../../assets/SpeakerImages/SatyaNadella.jpg"

const SpeakerCard = () => {
  return (
    <div className='speaker-card'>
      <img className='speaker-card__photo' src={SatyaNadella} />
      <div className='speaker-card__info'>
        <div className='speaker-card__info__name'>Satya Nadella</div>
        <div className='speaker-card__info__title'>
          CEO @ Microsoft | Opening Speaker
        </div>
        <div className='speaker-card__info__blurb'>
          Short Blub Copy and Pasted from Linkedin Bio djsfhf dsfsjdhfjksdh
          djshdfjsdhfjnb dsjkf skdjfhksj dhf fjsdfjsdk jfhsd jfhskj dhf
          dfhsdjfhdsjfs jdfndsjfdjfshs
        </div>
      </div>
    </div>
  )
}

export default SpeakerCard
