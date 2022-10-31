import React from "react"

import "./index.scss"

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__container--left'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:contact@cruzhacks.com'
          >
            Contact Us
          </a>
          <span className='footer__container--left--divider'></span>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
          >
            Code of Conduct
          </a>
          <span className='footer__container--left--divider'></span>
          <a target='_blank' rel='noopener noreferrer' href=''>
            Participant Agreement
          </a>
        </div>
        <div className='footer__container--right'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.instagram.com/cruzhacks/?hl=en'
          >
            <img
              src={process.env.PUBLIC_URL + "/logo_social-instagram-white.svg"}
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.facebook.com/CruzHacks/'
          >
            <img
              src={process.env.PUBLIC_URL + "/logo_social-facebook-white.svg"}
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/company/cruzhacks'
          >
            <img
              src={process.env.PUBLIC_URL + "/logo_social-linkedin-white.svg"}
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:contact@cruzhacks.com'
          >
            <img src={process.env.PUBLIC_URL + "/logo_social-mail-white.svg"} />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://twitter.com/CruzHacks'
          >
            <img
              src={process.env.PUBLIC_URL + "/logo_social-twitter-white.svg"}
            />
          </a>
        </div>
      </div>
      <div className='footer__copyright'>CRUZHACKS @ 2023</div>
    </footer>
  )
}
export default Footer
