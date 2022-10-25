import React from "react"
import QaBlurb from "../../../components/QaBlurb"
import "./index.scss"

const FAQs: React.FC = () => {
  return (
    <div className='faqs__container'>
      <h2>Q&A</h2>
      <div className='faqs__container--qas'>
        <div className='faqs__container--qas--left'>
          <QaBlurb
            question='What is Cruzhacks?'
            answer='CruzHacks is UCSC’s largest hackathon. It is a three day
            event where you can build your ideas, network, and show off your
            talent. Ideas can be formed through teams or individually. There are
            hundreds of students, mentors, sponsors, and judges that can help
            push your vision forward. The event also includes workshops geared
            towards students of all levels to learn and improve their technical
            skills.acks is UCSC’s largest hackathon. It is a three day event
            where you can build your ideas, network, and show off your talent.
            Ideas can be formed through teams or individually. There are
            hundreds of students, mentors, sponsors, and judges that can help
            push your vision forward. The event also includes workshops geared
            towards students of all levels to learn and improve their technical
            skills.
'
          />
          <QaBlurb
            question='When does the hackathon take place? How long is it?'
            answer='CruzHacks 2023 will take place in CruzHacks is a 3 day event
            that starts Friday night and ends Sunday afternoon. This year, it
            will take place on  January 13-15, 2023.'
          />
          <QaBlurb
            question='Who can participate?'
            answer='All students studying at a high school, college/university,
            and other alternative schools (such as bootcamps) can apply!
            CruzHacks is open to designers, project managers, artists, and
            anyone else interested in creating! Mentors will be available to
            help you through any technical difficulties. No coding or technical
            experience is necessary!'
          />
          <QaBlurb
            question='Do I need any previous experience?'
            answer='Nope! No experience is required. We’re looking for
            applicants who are passionate about learning something new and
            creating a vision. 25% of hackers in 2021 and 47% in 2020 were first
            time hackers.'
          />
        </div>
        <div className='faqs__container--qas--right'>
          <QaBlurb
            question='How do I sign up?'
            answer='Applications will open November 1st. To stay updated, follow
          us on Instagram and Twitter @cruzhacks.'
          />
          <QaBlurb
            question='Will there be people there to help me with my project?'
            answer='Yes! Mentors with various skills are present throughout the
            event to assist anyone on their project.'
          />
          <QaBlurb
            question='Will CruzHacks be in-person? Where is it located?'
            answer='CruzHacks will be in-person this year! It will be located at
            UCSC’s Stevenson College.'
          />
          <QaBlurb
            question='Do I need to have a team to apply? Is there a limit to the
            size of each team?'
            answer='It is not necessary to have a team at the time of
            application nor at the actual event! If you choose to build a team,
            there can be a maximum of 4 people.'
          />
        </div>
      </div>
      <div className='faqs__container--blurb'>
        <h3>{"Can't find your question?"}</h3>
        <p>Email us at cruzhacks2023@gmail.com</p>
      </div>
    </div>
  )
}

export default FAQs
