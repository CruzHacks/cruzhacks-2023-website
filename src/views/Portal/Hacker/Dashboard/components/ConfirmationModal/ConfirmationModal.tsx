import { Modal } from "@mui/material"
import React, { Dispatch } from "react"
import { ReactComponent as Exit } from "../../../../../../assets/Exit.svg"
import "./ConfirmationModal.scss"

export interface ConfirmationModalProps {
  open: boolean
  setOpen: Dispatch<boolean>
  header: string
  body: string
  primaryButtonText: string
  primaryButtonHandler(): any
  secondaryButtonText: string
  secondaryButtonHandler(): any
}

export const ConfirmationModal = (props: ConfirmationModalProps) => {
  return (
    <Modal open={props.open} onClose={() => props.setOpen(false)}>
      <div className='confirmation-modal'>
        <div className='confirmation-modal__close'>
          <button
            className='confirmation-modal__close__button'
            onClick={() => props.setOpen(false)}
          >
            <Exit />
          </button>
        </div>
        <div className='confirmation-modal__title'>{props.header}</div>
        <div className='confirmation-modal__body'>{props.body}</div>

        <div className='confirmation-modal__buttons'>
          <button
            className='confirmation-modal__buttons__confirm'
            onClick={() => {
              props.primaryButtonHandler()
              props.setOpen(false)
            }}
          >
            {props.primaryButtonText}
          </button>
          <button
            className='confirmation-modal__buttons__not-attending'
            onClick={() => {
              props.secondaryButtonHandler()
              props.setOpen(false)
            }}
          >
            {props.secondaryButtonText}
          </button>
        </div>
      </div>
    </Modal>
  )
}
