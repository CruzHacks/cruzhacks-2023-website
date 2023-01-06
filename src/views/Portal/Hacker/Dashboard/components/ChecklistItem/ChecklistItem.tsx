import React from "react"
import "./ChecklistItem.scss"

export interface ChecklistItemProps {
  checklistNum: number
  title: string
  message: string
  buttonText: string
  onClick: any
  isUnclickable?: boolean
  unClickableText?: string
  navigator?: any
}

export const ChecklistItem = (props: ChecklistItemProps) => {
  return (
    <div className='checklist__container'>
      <div className='checklist__container__header'>
        {props.checklistNum}. {props.title}
      </div>
      <div className='checklist__container__message'>{props.message}</div>
      <button
        className={`checklist__container__button${
          props.isUnclickable ? "--greyedOut" : ""
        }`}
        onClick={() => props.onClick()}
        disabled={props.isUnclickable}
      >
        {!props.isUnclickable ? props.buttonText : props.unClickableText}
      </button>
    </div>
  )
}
