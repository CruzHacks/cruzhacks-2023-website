import React from "react"
import "./index.scss"

const About: React.FC = () => {
  return (
    <div className='about__container'>
      <h2>About Us</h2>
      <div className='about__container--blurb'>
        <p>
          Longer blurb of Cruzhacks dfdfkshd fjsdkfhskdhfksjdhfjhsdj fhsdj kfhsf
          sdfjsdlkfjsdkljfls dkjfksdjfkjsdjflskjfdkjfskjdjfskdjf skd
          jfkjsdlfjsldjf lsk djfkjsdlfjskdjfkl
          sdjfkjdsfjsdljfskdjfksdjflksjfldkjsd jfk sjdfjsd fjsdkfjskdjfskjdfsk
          jdf kjsdljfskdjfklsjdfkjsdkfjsdkjfks
          ldjflksdjflsdkjflksdjfjsdfkjsdfjsdkfjsldkjfksjdfkjsdkfjskfjdfjskdj
          fksdjfksjfdslkjf lskdjfksjfdkjsflksjdflkj sdfkjsdf kjsldkfjskdf
          jjfskdfjslk jfd ksfjskldjfklsdfjslkfjdkls
        </p>
      </div>
      {/* TODO: Add Sponsor button functionality */}
      <div className='about__container--sponsor'>
        <button>Sponsor Us</button>
      </div>
      <h3>Our History</h3>
      <div className='about__container--history'>
        <p>
          CruzHacks was founded as Hack UCSC by Mark Adams, Brent Haddad, and
          Doug Erickson.
          ejfhrkjwehrkjwehrkjwhekrjhwekjrhwkjehrkjwehrkjwherkjwhekrhwkjerhke\
          whrkwj ehrkjwherjwherkjhwerjhwkejhrkwjehrkjwehkrjhw
          ekjrhwkejhrkwjehrkwehkrjhwejkrhwekhrkwejhrjwherkjhwerjhwekjrhwjkehrj
          kwehrkjwehrkjwherkjwherjwh
        </p>
      </div>
    </div>
  )
}

export default About
