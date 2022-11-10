import React, { useState } from "react"
import "./index.scss"

export interface QaBlurbProps {
  question: string
  children: React.ReactNode
}

const QaBlurb: React.FC<QaBlurbProps> = (props: QaBlurbProps) => {
  const { question, children } = props

  const [open, setOpen] = useState(false)

  return (
    <div className='qablurb__container'>
      <img
        className='qablurb__container--star'
        src={process.env.PUBLIC_URL + "/icon_star-green.svg"}
      />
      <div className='qablurb__container--QA'>
        <div
          className='qablurb__container--QA--question'
          onClick={() => setOpen(!open)}
        >
          <h3>{question}</h3>
          <button className={open ? "open" : ""}>
            <span></span>
            <span></span>
          </button>
        </div>
        <p className={open ? "" : "closed"}>{children}</p>
      </div>
    </div>
  )
}

export default QaBlurb
