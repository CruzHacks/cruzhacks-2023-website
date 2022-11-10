import React from "react"
import About from "./About/index.view"
import FAQs from "./FAQs/index.view"
import Gallery from "./Gallery/index.view"
import Landing from "./Landing/index.view"
import Projects from "./Projects/index.view"
import Quotes from "./Quotes/index.view"
import Sponsors from "./Sponsors/index.view"
import Milestones from "./Milestones/index.view"
import Tracks from "./Tracks/index.view"

import "./index.scss"

const Home: React.FC = () => (
  <>
    <Landing />
    <div className='home__container'>
      <About />
      <Tracks />
      <Milestones />
      <FAQs />
      <Gallery />
      <Projects />
      <Quotes />
      <Sponsors />
    </div>
  </>
)

export default Home
