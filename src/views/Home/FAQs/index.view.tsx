import React from "react"
import QaBlurb from "../../../components/QaBlurb"
import FAQsData from "./FAQsData"
import "./index.scss"

const FAQs: React.FC = () => {
  return (
    <div className='faqs__container'>
      <div className='faqs__header'>Q&A</div>
      <div className='faqs__container--qas'>
        <div className='faqs__container--qas--left'>
          {/* FAQsText[0] refers to left Blurbs */}
          {FAQsData[0].map((faq, index) => {
            return (
              <QaBlurb key={index} question={faq.question}>
                {faq.answer}
              </QaBlurb>
            )
          })}
        </div>

        {/* --------------------------------------------- */}

        <div className='faqs__container--qas--right'>
          {/* FAQsText[1] refers to right Blurbs */}
          {FAQsData[1].map((faq, index) => {
            return (
              <QaBlurb key={index} question={faq.question}>
                {faq.answer}
              </QaBlurb>
            )
          })}
        </div>
      </div>
      <a href='mailto:contact@cruzhacks.com'>
        <div className='faqs__container--blurb'>
          <h3>{"Can't find your question?"}</h3>
          <p>contact@cruzhacks.com</p>
        </div>
      </a>
    </div>
  )
}

export default FAQs
