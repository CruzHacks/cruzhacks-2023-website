import React from "react"
import Logo from "../../../images/icons/LogowStars.svg"
import "./index.scss"

const About: React.FC = () => {
  return (
    <div className='about__container'>
      <div className='about__container--logo'>
        <img src={Logo} alt='CruzHacks Logo' />
      </div>
      <h2>About Us</h2>
      <div className='about__container--blurb'>
        <p>
          CruzHacks is an event where people can collaborate, network, and wield
          technology to solve problems. Each year, we welcome hundreds of
          college and high school students interested in developing technology
          for social good. We strive to empower the next generation of creators
          by providing the tools, environment, and motivation to plausibly solve
          real-world problems. Our initiative is to expand diversity in tech by
          sparking the drive to innovate within all our participants.
        </p>
      </div>
      <a href='mailto:sponsor@cruzhacks.com'>
        <div className='about__container--sponsor'>
          <button>Sponsor Us</button>
        </div>
      </a>
      <h3>Our History</h3>
      <div className='about__container--history'>
        CruzHacks was founded in 2013 as Hack UCSC by Mark Adams, Brent Haddad,
        and Doug Erickson. In 2018, Hack UCSC was rebranded as CruzHacks, and
        became a student-led non-profit hackathon. Throughout the years,
        CruzHacks/Hack UCSC has sparked innovation and creativity from
        attendees, and has even been the source of a few start-up companies.
      </div>
      <div className='about__container--history-2'>
        When the pandemic struck in 2020, we saw it as an opportunity to bring
        our event online and expand accessibility - and we did! We saw
        participants from over 90 countries engage in our events. But after 2
        years of holding a virtual hackathon, we’re excited to return to our
        roots in 2023 for our first in-person event since 2020.
      </div>
    </div>
  )
}

export default About
