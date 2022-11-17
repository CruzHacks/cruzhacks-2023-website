import { ReactComponent as Instagram } from "../../assets/Instagram.svg"
import { ReactComponent as Facebook } from "../../assets/Facebook.svg"
import { ReactComponent as LinkedIn } from "../../assets/Linkedin.svg"
import { ReactComponent as Twitter } from "../../assets/Twitter.svg"
import { ReactComponent as Discord } from "../../assets/Discord.svg"

export interface SocialButtonProps {
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  link: string
}

export const SocialButtonInputs: Array<SocialButtonProps> = [
  {
    logo: Instagram,
    link: "https://www.instagram.com/cruzhacks/",
  },
  {
    logo: Facebook,
    link: "https://www.facebook.com/CruzHacks/",
  },
  {
    logo: LinkedIn,
    link: "https://www.linkedin.com/company/cruzhacks/",
  },
  {
    logo: Twitter,
    link: "https://twitter.com/CruzHacks",
  },
  {
    logo: Discord,
    link: "https://discord.gg/NBUHWbmaeb",
  },
]
