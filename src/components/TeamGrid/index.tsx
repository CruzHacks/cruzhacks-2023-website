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
  <div className='Member'>
    <img src={image} alt={name} className='Member--Image' />
    <div className='Member--Name'>{name}</div>
    <div className='Member--Title'>{title}</div>
    {LinkedInLink ? (
      <div className='Member--Logo'>
        <a href={LinkedInLink} target='_blank' rel='noreferrer'>
          <div className='Member--Logo--LogoBg'>
            <img src={LiLogo} alt='LinkedIn Logo' />
          </div>
        </a>
      </div>
    ) : null}
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
