import { useAuth0 } from "@auth0/auth0-react"
import React from "react"
import { removeTeamMember } from "../TeamBuilder/api"
import "./TeamDisplay.scss"

export interface TeamMember {
  position: number
  name: string
  id: string
}

export interface TeamDisplayProps {
  teamName: string
  members: Array<TeamMember>
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
              id={member.id}
              name={member.name}
              position={member.position + 1}
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

const TeamMemberTag = (props: TeamMember) => {
  const { getAccessTokenSilently } = useAuth0()
  return (
    <div className='membertag'>
      <div className='membertag--position'>Member {props.position}:&nbsp;</div>
      <div className='membertag--name'>{props.name || "<Empty>"}</div>
      {props.name ? (
        <button
          className='membertag--remove'
          onClick={() => {
            removeTeamMember(getAccessTokenSilently, props.id)
          }}
        >
          Remove
        </button>
      ) : null}
    </div>
  )
}
