import React, { useState } from "react"
import "./index.scss"

export interface QaBlurbProps {
  question: string
  answer: string
}

const QaBlurb: React.FC<QaBlurbProps> = (props: QaBlurbProps) => {
  const { question, answer } = props

  const [open, setOpen] = useState(false)

  return (
    <div className='qablurb__container'>
      <div
        className='qablurb__container--question'
        onClick={() => setOpen(!open)}
      >
        <h3>{question}</h3>
        <button className={open ? "open" : ""}>
          <span></span>
          <span></span>
        </button>
      </div>
      {open && <p>{answer}</p>}
    </div>
  )
}

export default QaBlurb
