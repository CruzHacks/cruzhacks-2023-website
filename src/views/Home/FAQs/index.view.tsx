import React from "react"
import QaBlurb from "../../../components/QaBlurb"
import "./index.scss"

const FAQs: React.FC = () => {
  return (
    <div className='faqs__container'>
      <h2>Q&A</h2>
      <div className='faqs__container--qas'>
        <div className='faqs__container--qas--left'>
          <QaBlurb
            question='Where will CruzHacks take place?'
            answer='this is the answer to the question'
          />
          <QaBlurb
            question='Where will CruzHacks take place?'
            answer='this is the answer to the question'
          />
        </div>
        <div className='faqs__container--qas--right'>
          <QaBlurb
            question='Where will CruzHacks take place?'
            answer='this is the answer to the question'
          />
          <QaBlurb
            question='Where will CruzHacks take place?'
            answer='this is the answer to the question'
          />
        </div>
      </div>
    </div>
  )
}

export default FAQs
