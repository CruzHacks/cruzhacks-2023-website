export interface VerificationEmailProps {
  user: string | undefined
  token: string
}

export interface MessageProps {
  message: string
  key: string
}

export interface MemberProps {
  name: string
  image: string
  title: string
  LinkedInLink: string
}

export interface NotificationProps {
  topic: string | Array<string>
  title: string
  body: string
}
