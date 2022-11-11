import React from "react"

import "./index.scss"

interface DropdownButtonProps {
  checked: boolean
  onClick: React.DispatchWithoutAction
}

const DropdownButton: React.FC<DropdownButtonProps> = (
  props: DropdownButtonProps
) => {
  const { onClick, checked } = props

  return (
    <div className='wrapper'>
      <input
        type='checkbox'
        onClick={() => onClick()}
        onChange={() => {}}
        checked={checked}
        readOnly
      ></input>
      <span className='bun'>
        <span className='burger'></span>
      </span>
    </div>
  )
}

export default DropdownButton
