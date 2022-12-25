import React from "react"
import NightSky from "../NightSky"
/**
 * Wraps an element in a foreground and background.
 */
const BGwrapper = (child: React.ComponentType<any>) => (
  <>
    <NightSky />
    <div className='fg'>{React.createElement(child)}</div>
  </>
)

export default BGwrapper
