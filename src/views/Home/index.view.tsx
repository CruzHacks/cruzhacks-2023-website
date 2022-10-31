import React from "react"
import About from "./About/index.view"
import FAQs from "./FAQs/index.view"
import Gallery from "./Gallery/index.view"
import Landing from "./Landing/index.view"
import Projects from "./Projects/index.view"
import Quotes from "./Quotes/index.view"
import Sponsors from "./Sponsors/index.view"
import Stats from "./Stats/index.view"
import Tracks from "./Tracks/index.view"

import "./index.scss"
import { useTheme } from "../../contexts/ThemeContext/ThemeContext"

const Home: React.FC = () => {
  const [theme] = useTheme()

  return (
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
      <img
        src={
          process.env.PUBLIC_URL + "/illustration_footer-" + theme.mode + ".svg"
        }
      />
    </div>
  )
}

export default Home
