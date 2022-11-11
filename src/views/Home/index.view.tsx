import React from "react"
import HeroBlurb from "./HeroBlurb/index.view"
import FAQs from "./FAQs/index.view"
import Landing from "./Landing/index.view"
// import Projects from "./Projects/index.view"
// import Sponsors from "./Sponsors/index.view"
import Milestones from "./Milestones/index.view"
import Tracks from "./Tracks/index.view"

import "./index.scss"

const Home: React.FC = () => (
  <div className='home__container'>
    <Landing />
    <HeroBlurb />
    <Tracks />
    <Milestones />
    <FAQs />
  </div>
)

export default Home
