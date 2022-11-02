import React from "react"
import QaBlurb from "../../../components/QaBlurb"
import "./index.scss"

const FAQs: React.FC = () => {
  return (
    <div className='faqs__container'>
      <h2>Q&A</h2>
      <div className='faqs__container--qas'>
        <div className='faqs__container--qas--left'>
          <QaBlurb question='What is Cruzhacks?'>
            CruzHacks is UCSC’s largest hackathon. It is a three day event where
            you can work with others on new software and/or hardware projects.
            You’ll be able to build your ideas, network, and show off your
            talent. Ideas can be formed through teams or individually. There are
            hundreds of students, mentors, sponsors, and judges that can help
            push your vision forward. The event also includes workshops geared
            towards students of all levels to learn and improve their technical
            skills
          </QaBlurb>
          {/* eslint-disable-next-line max-len */}
          <QaBlurb question='When does the hackathon take place? How long is it?'>
            CruzHacks 2023 will take place in CruzHacks is a 3 day event that
            starts Friday night and ends Sunday afternoon. This year, it will
            take place on January 13-15, 2023 (the Friday-Sunday of MLK
            Weekend).
          </QaBlurb>
          <QaBlurb question='Is CruzHacks 2023 fully in-person this year?'>
            Yes! We’ll be providing meals starting from dinner on Friday until
            lunch on Sunday. There will also be a sleeping space set up for
            non-UCSC students to sleep.
          </QaBlurb>
          <QaBlurb question='Who can participate?'>
            All students studying at a high school, college/university, and
            other alternative schools (such as bootcamps) can apply! CruzHacks
            is open to designers, project managers, artists, and anyone else
            interested in creating! Mentors will be available to help you
            through any technical difficulties. No coding or technical
            experience is necessary!
          </QaBlurb>
          <QaBlurb question='How much does this cost?'>
            Thanks to our generous sponsors, CruzHacks 2023 is free for our
            student attendees!
          </QaBlurb>
          <QaBlurb question='Do I need any previous experience?'>
            Nope! No experience is required. We’re looking for applicants who
            are passionate about learning something new and creating a vision.
            25% of hackers in 2021 and 47% in 2020 were first time hackers.
          </QaBlurb>
          <QaBlurb question='What rules do I need to follow?'>
            All CruzHacks 2023 participants will need to follow the{" "}
            <a href=''>MLH Code of Conduct</a>, the CruzHacks 2023 Participant
            and Release Agreement, the CruzHacks 2023 Rules, and the CruzHacks
            2023 COVID Safety Policy.
          </QaBlurb>
          <QaBlurb question='What are the prize tracks?'>
            CruzHacks 2023 offers 4 main prize tracks (Health Hacks, Justice
            Hacks, Sustainability Hacks, and Fintech Hacks). Hackers can submit
            their project to one of these 4 main prize tracks. We also offer 4
            category prizes (Best Beginner, Best UI/UX, New Technologies, and
            Best Slug Hack). Hackers can submit their project to any number of
            these 4 categories. There will also be sponsors hosting some of
            their own prize tracks. Hackers can submit their project to any
            number of sponsored prize tracks.
          </QaBlurb>
        </div>

        {/* --------------------------------------------- */}

        <div className='faqs__container--qas--right'>
          <QaBlurb question='How do I sign up?'>
            Applications are open now here and close on November 30th. To stay
            updated, follow us on Instagram and Twitter @cruzhacks.
          </QaBlurb>
          {/* eslint-disable-next-line max-len */}
          <QaBlurb question='Will there be people there to help me with my project?'>
            Yes! Mentors with various skills are present throughout the event to
            assist anyone on their project.
          </QaBlurb>
          <QaBlurb question='Will CruzHacks be in-person? Where is it located?'>
            CruzHacks will be in-person this year! It will be located at UC
            Santa Cruz. (More specific location details to come!)
          </QaBlurb>
          <QaBlurb
            question='Do I need to have a team to apply? Is there a limit to the
            size of each team?'
          >
            It is not necessary to have a team at the time of application nor at
            the actual event! If you choose to build a team, there can be a
            maximum of 4 people.
          </QaBlurb>
          <QaBlurb question='Can I become a judge or mentor?'>
            If you’re not a high school or undergraduate college student, you
            can apply to be a judge or mentor at CruzHacks 2023! Click{" "}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://forms.gle/ofzoJ9VVkZAEhnPv8'
            >
              here
            </a>{" "}
            to apply.
          </QaBlurb>
          <QaBlurb
            question='Can I help out another way if I don’t want to be a Hacker,
            but am not eligible to be a judge or mentor?'
          >
            If you are a current UCSC student, you’re welcome to volunteer with
            us! Volunteers are invaluable in helping us set up, clean up, and
            everything in between! Click{" "}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://forms.gle/R9KtP8VMGGbfVTBx9'
            >
              {" "}
              here
            </a>{" "}
            to apply.
          </QaBlurb>
          <QaBlurb question='What are CruzPoints?'>
            CruzPoints is CruzHacks 2023’s point reward system for Hackers! For
            more information,
            {/* eslint-disable max-len */}
            <a
              target='_blank'
              rel='noreferrer'
              href='https://docs.google.com/document/d/1kExaZxBGb4VveTr6TDdAOKWLCM7E22OmGRxP4htBTok/edit?usp=share_link'
            >
              click here
            </a>
            {/* eslint-enable max-len */}.
          </QaBlurb>
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
