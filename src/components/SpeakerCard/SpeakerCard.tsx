import { ReactComponent as LinkedIn } from "../../assets/Linkedin.svg"
import React from "react"
import "./SpeakerCard.scss"

export interface SpeakerData {
  image: string
  name: string
  title: string
  blurb: string
  key: number
}

const SpeakerCard = (props: {
  style?: React.CSSProperties
  data: SpeakerData
}) => {
  return (
    <div style={props.style || {}} className='speaker-card'>
      <div>
        <img className='speaker-card__photo' src={props.data.image} />
        <div className='speaker-card__linkedin'>
          <LinkedIn />
        </div>
      </div>
      <div className='speaker-card__info'>
        <div className='speaker-card__info__name'>{props.data.name}</div>
        <div className='speaker-card__info__title'>{props.data.title}</div>
        <div className='speaker-card__info__blurb'>{props.data.blurb}</div>
      </div>
    </div>
  )
}

export default SpeakerCard
