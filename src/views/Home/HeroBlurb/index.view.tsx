import React from "react"
import "./index.scss"

const HeroBlurb: React.FC = () => (
  <div className='HeroBlurb__container'>
    <div className='HeroBlurb__container--title'>
      ENCOURAGING A NEW GENERATION OF SOCIAL GOOD INNOVATORS
    </div>
    <div className='HeroBlurb__container--blurb'>
      A non-profit, student-run, annual hackathon based in UC Santa Cruz. Each
      year we welcome hundreds of college and high school students interested in
      developing technology for social good. We strive to empower the next
      generation of creators by providing the tools, environment, and motivation
      to plausibly solve real-world problems.
    </div>
  </div>
)

export default HeroBlurb
