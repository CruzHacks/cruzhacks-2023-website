import React from "react"
import "./index.scss"

interface LoadingProps {
  message: string
}

/**
 * Provides an element to display upon loading/redirection.
 * Primary purpose is to mantain consistent styling.
 */

const Loading: React.FC<LoadingProps> = ({ message }: LoadingProps) => {
  return <div className='loading__container'>{message}</div>
}

Loading.defaultProps = {
  message: "Loading...",
}

export default Loading
