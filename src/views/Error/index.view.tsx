import React from "react"
import "./index.scss"

const names = ["clouds__container", "cloud third"]

const ErrorView: React.FC = () => {
  React.useEffect(() => {
    names.forEach(name => {
      const elem = document.getElementsByClassName(name)
      elem[0].classList.add("errorview")
    })
    const cleanup = () => {
      names.forEach(name => {
        const elem = document.getElementsByClassName(name)
        elem[0].classList.remove("errorview")
      })
    }
    return cleanup
  }, [])
  return (
    <div className='error__container'>
      <div className='error__container--title'>404</div>
      <div className='error__container--blurb'>
        Oops! We Can&apos;t Find What You&apos;re Looking For
      </div>
    </div>
  )
}

export default ErrorView
