import React from "react"
import { SocialButtonProps } from "../../Props/Socials/props"
import "./SocialButton.scss"

export const SocialButton = (props: SocialButtonProps) => (
  <button
    className='social_button'
    onClick={() => {
      window.open(props.link)
    }}
  >
    <props.logo className='social_button--svg' />
  </button>
)
