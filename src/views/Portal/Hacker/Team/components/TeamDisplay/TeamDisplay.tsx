import React, { Dispatch } from "react"
import "./TeamDisplay.scss"

interface TeamMember {
  position: number
  name: string
}

export type TeamMembers = [
  TeamMember,
  TeamMember,
  TeamMember,
  TeamMember,
  TeamMember
]

export interface TeamDisplayProps {
  teamName: string
  members: TeamMembers
}

export const TeamDisplay = (props: TeamDisplayProps) => {
  return (
    <div className='teamdisplay'>
      <div className='teamdisplay__header'>
        {props.teamName || "*[No Team]*"}
      </div>
      <div className='teamdisplay__members'>
        {props.members.map((member: TeamMember) => {
          return (
            <TeamMemberTag
              key={member.position}
              name={member.name}
              position={member.position}
            />
          )
        })}
      </div>
      <div className='teamdisplay__review'>
        Please take a moment to review your team above. If everything looks
        correct, please press submit and get excited to hack with us very soon!
      </div>
      <button className='teamdisplay__submit-button'>Submit</button>
    </div>
  )
}

const TeamMemberTag = (props: { name?: string; position: number }) => {
  return (
    <div className='membertag'>
      <div className='membertag--position'>Member {props.position}:&nbsp;</div>
      <div className='membertag--name'>{props.name || "<Empty>"}</div>
      {props.name ? (
        <button className='membertag--remove'>Remove</button>
      ) : null}
    </div>
  )
}
