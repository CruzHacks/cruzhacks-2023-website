import React from "react"
import { useTheme } from "../../contexts/ThemeContext/ThemeContext"

import "./index.scss"

const Footer: React.FC = () => {
  const [theme] = useTheme()

  return (
    <>
      <img
        className='footer__image'
        src={
          process.env.PUBLIC_URL + "/illustration_footer-" + theme.mode + ".svg"
        }
      />
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
            <div className='footer__copyright'>CRUZHACKS © 2023</div>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://2022.cruzhacks.com/'
              className='footer__container--right--socials'
            >
              <img src={process.env.PUBLIC_URL + "/logo_2022-white.svg"} />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/cruzhacks/?hl=en'
              className='footer__container--right--socials'
            >
              <img
                src={
                  process.env.PUBLIC_URL + "/logo_social-instagram-white.svg"
                }
              />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facebook.com/CruzHacks/'
              className='footer__container--right--socials'
            >
              <img
                src={process.env.PUBLIC_URL + "/logo_social-facebook-white.svg"}
              />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/company/cruzhacks'
              className='footer__container--right--socials'
            >
              <img
                src={process.env.PUBLIC_URL + "/logo_social-linkedin-white.svg"}
              />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:contact@cruzhacks.com'
              className='footer__container--right--socials'
            >
              <img
                src={process.env.PUBLIC_URL + "/logo_social-mail-white.svg"}
              />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/CruzHacks'
              className='footer__container--right--socials'
            >
              <img
                src={process.env.PUBLIC_URL + "/logo_social-twitter-white.svg"}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
