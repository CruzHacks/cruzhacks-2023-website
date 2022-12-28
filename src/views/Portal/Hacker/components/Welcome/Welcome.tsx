import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import "./Welcome.scss"

export const HackerDashWelcome: React.FC = () => {
  const { user } = useAuth0()
  return (
    <div className='welcome__container'>
      <div className='welcome__container--message'>
        Welcome, Sid{user && user.name}!
      </div>
      <div className='welcome__container__cruzpoints'>
        <div className='welcome__container__cruzpoints--text'>
          My CruzPoints:
        </div>
        <div className='welcome__container__cruzpoints--points'>12 pts</div>
        <button className='welcome__container__cruzpoints--code-button'>
          Enter Code
        </button>
      </div>
    </div>
  )
}
