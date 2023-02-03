import React, { useState } from "react"
import SpeakerCard, {
  SpeakerData,
} from "../../../components/SpeakerCard/SpeakerCard"

import "./index.scss"

const Speakers = (props: { speakerData: Array<SpeakerData> }) => {
  const [page, setPage] = useState<number>(0)

  return (
    <div className='speakers'>
      <div className='speakers__container'>
        <div className='speakers__container__header'>SPEAKERS</div>
        <div className='speakers__container__cards'>
          {props.speakerData.map(data => (
            <SpeakerCard
              key={data.key}
              data={data}
              style={{
                transform: `translateX(calc(-${page * 100}% - ${page * 40}px))`,
              }}
            />
          ))}
          <button
            className='speakers__container__left-button'
            onClick={() => {
              page > 0 ? setPage(page - 1) : page
            }}
          ></button>
          <button
            className='speakers__container__right-button'
            onClick={() => {
              page < props.speakerData.length - 1 ? setPage(page + 1) : page
            }}
          ></button>
        </div>
        <div className=''></div>
      </div>
    </div>
  )
}

export default Speakers
