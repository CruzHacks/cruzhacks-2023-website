import React, { useState } from "react"
import "./index.scss"

const ErrorView: React.FC = () => {
  let elem = document.getElementById("footer")
  // get initial dims
  let footerHeight = 0
  if (elem) footerHeight = elem.offsetHeight
  const [divHeight, setDivHeight] = useState(window.innerHeight - footerHeight)

  React.useEffect(() => {
    function handleResize() {
      // resize dims
      if (elem) setDivHeight(window.innerHeight - elem.offsetHeight)
    }
    if (footerHeight === 0) {
      // if footer was not loaded yet, try to query again
      elem = document.getElementById("footer")
      handleResize()
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className='error__container' style={{ height: divHeight }}>
      <div className='error__container--title'>404</div>
      <div className='error__container--blurb'>
        Oops! We Can&apos;t Find What You&apos;re Looking For
      </div>
    </div>
  )
}

export default ErrorView
