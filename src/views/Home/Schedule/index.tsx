import React, { Dispatch, useState } from "react"
import { useTheme } from "../../../contexts/ThemeContext/ThemeContext"
import "./index.scss"

export interface ScheduleEvent {
  name: string
  time: string
}

interface SchedulePageProps {
  date: string
  events: Array<ScheduleEvent>
}

const SampleEvents: Array<ScheduleEvent> = [
  {
    name: "Opening Ceremony",
    time: "5:00pm",
  },
]

const Schedule = () => {
  const [selected, setSelected] = useState<number>(0)
  return (
    <div className='schedule'>
      <div>SCHEDULE</div>
      <ScheduleTabs
        pageNumbers={3}
        selected={selected}
        setSelected={setSelected}
      />
      <SchedulePage date='Friday, January 15' events={SampleEvents} />
    </div>
  )
}

const ScheduleTabs = (props: {
  pageNumbers: number
  selected: number
  setSelected: Dispatch<number>
}) => {
  const pages = []
  const { theme } = useTheme()
  for (let i = 0; i < props.pageNumbers; i++) {
    pages.push(
      <button
        key={i}
        className={`schedule-tabs__tab${
          theme.mode === "light" ? "--light" : ""
        } ${props.selected === i ? "selected" : ""}`}
        onClick={() => {
          props.setSelected(i)
        }}
      >
        Page {i + 1}
      </button>
    )
  }
  return <div className='schedule-tabs'>{pages}</div>
}

const SchedulePage = ({ date, events }: SchedulePageProps) => {
  return (
    <div className='schedule-page'>
      <div className='schedule-page__title'>{date}</div>
      <div className='schedule-page__event'>
        <div className='schedule-page__event--name'>{events[0].name}</div>
        <div className='schedule-page__event--time'>{events[0].time}</div>
      </div>
    </div>
  )
}
export default Schedule
