/* eslint-disable max-len */
import React, { SVGProps } from "react"
import { ReactComponent as Beginner } from "../../assets/Beginner.svg"
import { ReactComponent as Healthcare } from "../../assets/Healthcare.svg"
import { ReactComponent as Justice } from "../../assets/Justice.svg"
import { ReactComponent as Sustainability } from "../../assets/Sustainability.svg"
import { ReactComponent as UIUX } from "../../assets/UXIcon.svg"
import { ReactComponent as Fintech } from "../../assets/Fintech.svg"
import { ReactComponent as NewTech } from "../../assets/NewTech.svg"
import { ReactComponent as Slug } from "../../assets/Slug.svg"
export interface PrizeTrackProps {
  logo: React.FunctionComponent<SVGProps<SVGSVGElement>>
  title: string
  blurb: string
}

export const TechCaresTracks: Array<PrizeTrackProps> = [
  {
    logo: Sustainability,
    title: "SUSTAINABILITY",
    blurb:
      "This category is dedicated to supporting sustainability and conservation efforts. How can we live harmoniously with our planet?",
  },
  {
    logo: Healthcare,
    title: "HEALTHCARE",
    blurb:
      "This category aspires to address healthcare disparities. How do we support mental & physical well-being with accessible services?",
  },
  {
    logo: Justice,
    title: "JUSTICE",
    blurb:
      "This category aims to drive innovation for civil liberty and social justice. How can we uphold truth & order in a (mis)information age?",
  },
  {
    logo: Fintech,
    title: "FINTECH",
    blurb:
      "This category is dedicated to driving innovation in financial technology for social good. How can we make finances and banking more accessible to the general public?",
  },
]

export const CategoryTracks: Array<PrizeTrackProps> = [
  {
    logo: Beginner,
    title: "BEGINNER",
    blurb:
      "Hackathons are meant for everyone, especially our first-timers! We've created a prize category to reward teams composed of all first-time hackers.",
  },
  {
    logo: NewTech,
    title: "NEW TECHNOLOGIES",
    blurb:
      "The world is constantly changing, and so is technology! Create a project using some of the newest technologies, such as AI/ML, AR/VR, or decentralized technology.",
  },
  {
    logo: UIUX,
    title: "UI/UX",
    blurb:
      "Have a new paradigm for interaction design? Create a project that has an awesome user experience!",
  },
  {
    logo: Slug,
    title: "SLUGHACKS",
    blurb: "Create something that benefits the UC Santa Cruz campus community!",
  },
]
