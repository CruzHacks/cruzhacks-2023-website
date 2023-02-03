import { SpeakerData } from "../../components/SpeakerCard/SpeakerCard"
import MichealLopp from "../../assets/SpeakerImages/MichaelLopp.jpg"
import RaghavJandhyala from "../../assets/SpeakerImages/RaghavJandhyala.jpg"
import NadaMilkovic from "../../assets/SpeakerImages/NadaMilkovic.jpg"
import GregorVebleMikie from "../../assets/SpeakerImages/GregorVebleMikie.jpg"
import BrentHaddad from "../../assets/SpeakerImages/BrentHaddad.jpg"
import AlexanderWolf from "../../assets/SpeakerImages/AlexanderWolf.jpg"
import MarkAdams from "../../assets/SpeakerImages/MarkAdams.jpg"

const SpeakerProps: Array<SpeakerData> = [
  {
    image: MichealLopp,
    name: "Micheal Lopp",
    title: "Senior Director of Engineering @ Apple; UCSC Alumni",
    blurb: `Michael Lopp is a veteran Silicon Valley-based engineering
     leader who builds both people and products at historic companies 
     such as Slack, Borland, Netscape, Palantir, Pinterest, and Apple. 
     When he's not deeply worrying about his work, he writes 
     about backpacks, bridges, humans, and leadership at the popular weblog, 
     Rands in Repose. He currently works at Apple.`,
    linkedIn: "https://www.linkedin.com/in/michaellopp/",
    key: 0,
  },
  {
    image: RaghavJandhyala,
    name: "Raghav Jandhyala",
    title: "Chief Product Officer, Microsoft Dynamics 365",
    blurb: `Raghav Jandhyala is Chief Product Officer at Microsoft for 
    Dynamics 365 Supply Chain Planning. Prior to Microsoft he was with 
    SAP where served as VP for SAP Integrated Business Planning. Author 
    of four books on Digital Supply Chain and Technology Transformations, 
    Raghav has 19 years of experience in Supply Chain Management, Retail 
    and Finance along with a strong technical background in Big Data, 
    Cloud & Machine Learning. He has a Masters Degree in CS from SIUC 
    and Adv Machine Learning from Harvard. 
    `,
    linkedIn: "https://www.linkedin.com/in/raghav-jandhyala-2988413/",
    key: 1,
  },
  {
    image: MarkAdams,
    name: "Mark Adams",
    title: `Co-founder of CruzHacks / OnePlus Amazon Account Manager`,
    blurb: `As a student, Mark co-founded HACK UCSC/CruzHacks with Brent
    Haddad and Doug Erickson. Since graduating he has hacked his way 
    through numerous challenges, from successfully crowdfunding and launching 
    an Amazon FBA business, creating a top 10 ranked ProductHunt app (when it 
    was cool), procuring millions in PPE and Capital Medical Equipment for 
    Amazon during the chaos of the early pandemic and now launching the 
    upcoming OnePlus 11 5G on Amazon. Feel free to reach out about E-commerce 
    at the hackathon or on Linkedin!`,
    key: 2,
  },
  {
    image: BrentHaddad,
    name: "Brent Haddad",
    title: `Brent Haddad, MBA, Ph.D.
    Professor of Environmental Studies, UCSC
    Co-founder, HackUCSC`,
    blurb: `Brent Haddad was involved in a number of start-ups (emissions
       trading, bank-based financial advising) early in his career.  He 
       became a professor and studied efforts to create new markets for 
       environmental goods and services, including water and green energy.  
       He served as Associate Dean of Engineering and Director of the UCSC 
       Center for Entrepreneurship. Now he's a Professor of Environmental 
       Studies at UCSC.
    `,
    key: 3,
  },
  {
    image: NadaMilkovic,
    name: "Nada Miljkovic",
    title: `Co-Founder @ GetVirtual; Project Manager for UCSC’s 
    Center for Innovation and Entrepreneurial Development`,
    blurb: `Nada Miljkovic is the Project Manager for UCSC's CIED & 
    Faculty Instructor at Crown College, focusing on entrepreneurship,
     ethics and digital storytelling. She is a PhD Student in the Digital 
     Arts, at the University of Arts, Belgrade, Serbia, Chair of the Board 
     of Directors at United Agency Services &  E.A.R.T.H Lab SF, and CEO &
      Co-Founder of GetVirtual.
    `,
    linkedIn: "https://www.linkedin.com/in/namiljkovic/",
    key: 4,
  },
  {
    image: GregorVebleMikie,
    name: "Gregor Veble Mikić",
    title: "Chief Aerodynamicist at Joby Aviation",
    blurb: `Gregor Veble Mikić is head of Flight Research & Flight Physics 
    at Joby Aviation. He worked on the aerodynamic design of the Joby aircraft. 
    He obtained his Ph.D. in physics from the University of Ljubljana, Slovenia
     and was Associate Professor of Physics at the University of Nova Gorica. 
     In his previous life, he led the design of the Panthera general aviation 
     aircraft, and was responsible for the aerodynamics and performance of the 
     battery powered Taurus G4, the aircraft that won the NASA Green Flight 
     Challenge sponsored by Google competition in 2011.
    `,
    linkedIn: "https://www.linkedin.com/in/gregorv/",
    key: 5,
  },
  {
    image: AlexanderWolf,
    name: "Alexander Wolf",
    title: "Dean of the Baskin School of Engineering at UC Santa Cruz",
    blurb: `Alexander Wolf serves as dean of the Baskin School of Engineering 
    and is a distinguished professor of computer science and engineering at the 
    University of California, Santa Cruz.Alex’s research interests span the 
    areas of distributed systems, networking, and software engineering. His 
    achievements include seminal work in software architecture, business 
    analytics, and information-centric networks. His more recent projects 
    concern cloud computing, data-center networking, and service-based systems 
    hosted on MANETs.`,
    linkedIn: "https://www.linkedin.com/in/alexanderlwolf/",
    key: 6,
  },
]

export default SpeakerProps
