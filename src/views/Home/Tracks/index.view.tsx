import React from "react"
import "./index.scss"
import {
  CategoryTracks,
  PrizeTrackProps,
  TechCaresTracks,
} from "../../../Props/Tracks/props"
interface TrackCardProps {
  SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
  blurb: string
}

const TrackCard = (props: TrackCardProps) => (
  <div className='track-card'>
    <div className='track-card__SVG'>
      <props.SVG className='track-card__SVG--image' />
    </div>
    <div className='track-card__title'>{props.title}</div>
    <div className='track-card__blurb-container'>
      <div className='track-card__blurb-container--text'>{props.blurb}</div>
    </div>
  </div>
)

const Tracks: React.FC = () => (
  <div>
    <div className='tracks__title'>TECH CARES TRACKS</div>
    <div className='tracks__container'>
      {TechCaresTracks.map(({ logo, title, blurb }: PrizeTrackProps) => (
        <TrackCard key={title} SVG={logo} title={title} blurb={blurb} />
      ))}
    </div>
    <div className='tracks--space-between'></div>
    <div className='tracks__title'>CATEGORY PRIZES</div>
    <div className='tracks__container'>
      {CategoryTracks.map(({ logo, title, blurb }: PrizeTrackProps) => (
        <TrackCard key={title} SVG={logo} title={title} blurb={blurb} />
      ))}
    </div>
  </div>
)

export default Tracks
