import React from "react"
import "./VerifyMessage.scss"
import { MessageProps } from "../../../Props/props"

const VerifyMessages: React.FC = () => {
  const Messages: MessageProps[] = [
    {
      message:
        "If you are viewing this page, you have not yet verified your email.",
      key: "Line 1",
    },
    {
      message: `Please check your email for a verification from \
      dev@cruzhacks.com. If you do not see a verification email, \
      please check your spam.`,
      key: "Line 2",
    },
    {
      message:
        "If you still cannot find it, you can resend a \
        verification email below once every 30 seconds.",
      key: "Line 3",
    },
    {
      message:
        "Once you have verified your email, \
        please refresh your browser to have full access. \
        If you are experiencing any issues send a message to \
        dev@cruzhacks.com.",
      key: "Line 4",
    },
    {
      message: "We are excited to see you at CruzHacks 2022!",
      key: "Line 5",
    },
  ]
  return (
    <div className='verify-message'>
      {Messages.map(({ message, key }: MessageProps) => (
        <div className='verify-message__text' key={key}>
          {message}
        </div>
      ))}
    </div>
  )
}

export default VerifyMessages
