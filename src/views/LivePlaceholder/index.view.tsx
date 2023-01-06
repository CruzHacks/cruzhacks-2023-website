import React, { useState } from "react"
import { ReactComponent as PhContent } from "../../assets/placeholder.svg"
import "./index.scss"

const LivePlaceholder: React.FC = () => {
  const elem = document.getElementById("footer")
  // get initial dims
  let footerHeight = 0
  if (elem) footerHeight = elem.offsetHeight

  const [divHeight, setDivHeight] = useState(window.innerHeight - footerHeight)

  React.useEffect(() => {
    function handleResize() {
      // resize dims
      if (elem) setDivHeight(window.innerHeight - elem.offsetHeight)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className='lph__container' style={{ height: divHeight }}>
      <PhContent className='ph-icon' />
    </div>
  )
}

export default LivePlaceholder
