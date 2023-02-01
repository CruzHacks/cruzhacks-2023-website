import React from "react"
import HeroBlurb from "./HeroBlurb/index.view"
import FAQs from "./FAQs/index.view"
import Landing from "./Landing/index.view"
// import Projects from "./Projects/index.view"
import Sponsors from "./Sponsors/index.view"
import Milestones from "./Milestones/index.view"
import Tracks from "./Tracks/index.view"

import "./index.scss"
import Speakers from "./Speakers/index.view"
import SpeakerProps from "../../Props/SpeakerProps/props"

const Home: React.FC = () => (
  <>
    <Landing />
    <div className='home__container'>
      <HeroBlurb />
      <Tracks />
      <Milestones />
      <Speakers speakerData={SpeakerProps} />
      <FAQs />
      <Sponsors />
    </div>
  </>
)

export default Home
