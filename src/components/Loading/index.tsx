import React, { useState } from "react"
import "./index.scss"

interface LoadingProps {
  message: string
}

/**
 * Provides an element to display upon loading/redirection.
 * Primary purpose is to mantain consistent styling.
 */

const Loading: React.FC<LoadingProps> = ({ message }: LoadingProps) => {
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
    <div className='loading__container' style={{ height: divHeight }}>
      {message}
    </div>
  )
}

Loading.defaultProps = {
  message: "Loading...",
}

export default Loading
