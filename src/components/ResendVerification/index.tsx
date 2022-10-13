import React, { useState } from "react"
import "./index.scss"
import ReCAPTCHA from "react-google-recaptcha"
import CoolDownButton from "../Button/CoolDownButton"
import { resendVerificationEmail, verifyRecaptchaToken } from "../../utils/api"
import { VerificationEmailProps } from "../../Props/props"

const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || ""

const ResendVerification: React.FC<VerificationEmailProps> = ({
  user,
  token,
}: VerificationEmailProps) => {
  const [verified, setVerified] = useState<boolean>(false)
  const [response, setResponse] = useState<string>("")
  const onClick = () => {
    resendVerificationEmail(user, token)
      .then(res => {
        if (res.status === 201) {
          setResponse("Successfully Resent Verify Email")
        } else {
          setResponse("Failed to Resend")
        }
      })
      .catch(() => setResponse("Failed to Resend"))
  }
  return (
    <div className='resendVerification-component'>
      <div className='resendVerification-component__recaptcha'>
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={(res: any) =>
            verifyRecaptchaToken(res, () => setVerified(true))
          }
          theme='dark'
          onExpired={() => setVerified(false)}
        />
      </div>
      <CoolDownButton
        label='resend'
        disabled={!verified}
        duration={1000 * 30}
        onClick={onClick}
      >
        Resend Verification Email
      </CoolDownButton>
      {response && (
        <div className='resendVerification-component__response'>{response}</div>
      )}
    </div>
  )
}

export default ResendVerification
