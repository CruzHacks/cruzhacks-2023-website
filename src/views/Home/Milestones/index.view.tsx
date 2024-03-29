import React from "react"
import { nanoid } from "nanoid"
import { ReactComponent as Nodes } from "../../../assets/Nodes.svg"
import "./index.scss"

interface Stat {
  class: string
  val: string
  desc: string
}

const stats: Array<Stat> = [
  {
    class: "hackers",
    val: "400+",
    desc: "ATTENDEES",
  },
  {
    class: "projects",
    val: "86",
    desc: "PROJECTS",
  },
  {
    class: "prizes",
    val: "$35k+",
    desc: "IN PRIZES",
  },
  {
    class: "beginners",
    val: "62%",
    desc: "FIRST TIME HACKERS",
  },
]
const Milestones: React.FC = () => {
  return (
    <div className='milestones__container'>
      <div className='milestones__container--title'>MILESTONES OF 2023</div>
      <div className='milestones__container--nodes'>
        <Nodes className='nodesIcon' />
      </div>
      <div className='stats-wrapper'>
        {stats.map(item => (
          <div
            className={`milestones__container--stats__${item.class}`}
            key={nanoid()}
          >
            <div
              className={`milestones__container--stats__${item.class}--title`}
            >
              {item.val}
            </div>
            <div
              className={`milestones__container--stats__${item.class}--desc`}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Milestones
