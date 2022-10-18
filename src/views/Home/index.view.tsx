import React from "react"
import FAQs from "./FAQs/index.view"
import Gallery from "./Gallery/index.view"
import Landing from "./Landing/index.view"
import Projects from "./Projects/index.view"
import Quotes from "./Quotes/index.view"
import Sponsors from "./Sponsors/index.view"
import Stats from "./Stats/index.view"
import Tracks from "./Tracks/index.view"

const Home: React.FC = () => (
  <div className='home__container'>
    <Landing />
    <Tracks />
    <Stats />
    <FAQs />
    <Gallery />
    <Projects />
    <Quotes />
    <Sponsors />
  </div>
)

export default Home
