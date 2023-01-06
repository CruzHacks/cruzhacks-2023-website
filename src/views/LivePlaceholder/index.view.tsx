import React from "react"
import { ReactComponent as PhContent } from "../../assets/placeholder.svg"
import "./index.scss"

const LivePlaceholder: React.FC = () => {
  return (
    <div className='lph__container'>
      <PhContent className='ph-icon' />
    </div>
  )
}

export default LivePlaceholder
