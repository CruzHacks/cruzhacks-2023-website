import React, { useState } from "react"
import "./index.scss"
import axios from "axios"

const Landing: React.FC = () => {
  const [email, setEmail] = useState<string>("")
  const MAILCHIMP_API_KEY = process.env.REACT_APP_MAILCHIMP_API_KEY || ""
  return (
    <div className='landing__container'>
      <div className='landing__container__title'>CruzHacks 2023</div>
      <div className='landing__container__blurb'>A tiny blurb about us</div>
      <div className='landing__container__when'>When is it</div>
      <div className='landing__container_where'>Where is it</div>
      <div className='landing__container__inputs'>
        <div className='landing__container__inputs__row1'>
          <input
            className='landing__container__inputs__row1__button1'
            onChange={e => setEmail(e.target.value)}
          />
          <button className='landing__container__inputs__row1__button2' 
          onClick={()=>{ 
            axios({
              method: 'get',
              url: `${process.env.REACT_APP_MAILCHIMP_ENDPOINT}/cruzhacks-4a899/us-central1/subscribe`,
              headers: {
                'autentication' : MAILCHIMP_API_KEY,
                'content-type' : 'application/json'
              },
              data: {
                "email" : email
              }
            })
          }}>
            --&gt;
          </button>
        </div>
        <div className='landing__container__inputs__row2'>
          <button className='landing__container__inputs__row2__button1'>
            Apps Open Dec
          </button>
          <button className='landing__container__inputs__row2__button2'>
            Sponsor Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing
