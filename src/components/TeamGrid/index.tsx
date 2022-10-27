import React from "react"
import { MemberProps } from "../../Props/props"
import "./index.scss"
import members from "../../Props/memberProps/members"
import LiLogo from "../../images/icons/fancylinkedin.svg"

const MemberCard: React.FC<MemberProps> = ({
  name,
  image,
  title,
  LinkedInLink,
}: MemberProps) => (
  <div className=''>
    <img src={image} alt={name} className='Member_Image' />
    <div className='Member__Name'>{name}</div>
    <div className='Member__Title'>{title}</div>
    <div className='Member__Logo'>
      <a href={LinkedInLink}>
        <div className='Member__Logo__LogoBg'>
          <img src={LiLogo} alt='LinkedIn Logo' />
        </div>
      </a>
    </div>
  </div>
)

const TeamGrid: React.FC = () => (
  <div className='team-grid__container'>
    {members.map(({ name, title, image, LinkedInLink }: MemberProps) => (
      <MemberCard
        key={name}
        name={name}
        image={image}
        title={title}
        LinkedInLink={LinkedInLink}
      />
    ))}
  </div>
)

export default TeamGrid
