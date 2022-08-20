import React from "react"
import About from "./components/About/index.view"
import FAQs from "./components/FAQs/index.view"
import Gallery from "./components/Gallery/index.view"
import Landing from "./components/Landing/index.view"
import Projects from "./components/Projects/index.view"
import Quotes from "./components/Quotes/index.view"
import Sponsors from "./components/Sponsors/index.view"
import Stats from "./components/Stats/index.view"
import Tracks from "./components/Tracks/index.view"

const Home: React.FC = () => (
  <div className='home__container'>
    <Landing />
    <About />
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
