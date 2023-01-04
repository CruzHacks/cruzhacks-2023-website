import React from "react"
import { SponsorsIconsLinks } from "../../../Props/Sponsors/props"
import { nanoid } from "nanoid"
import "./index.scss"

const Sponsors: React.FC = () => (
  <div className='sponsors'>
    Thanks to our Sponsors!
    <div className='sponsors--icons'>
      {SponsorsIconsLinks.map(tier => (
        <div key={nanoid()} className='sponsors--icons__row'>
          {tier.map(item => (
            <a
              key={nanoid()}
              href={item.link}
              target='_blank'
              referrerPolicy='no-referrer'
              title={item.alt}
              rel='noreferrer'
            >
              {React.createElement(item.icon, {
                className: "sponsorIcon",
              })}
            </a>
          ))}
        </div>
      ))}
    </div>
  </div>
)

export default Sponsors
