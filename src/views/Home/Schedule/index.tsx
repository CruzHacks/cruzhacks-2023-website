import React, { Dispatch, useState } from "react"
import { useTheme } from "../../../contexts/ThemeContext/ThemeContext"
import { scheduleEvents } from "../../../Props/ScheduleProps/props"
import "./index.scss"

export interface ScheduleEvent {
  name: string
  time: string
}

interface SchedulePageProps {
  date: string
  events: Array<ScheduleEvent>
}

const Schedule = () => {
  const [selected, setSelected] = useState<number>(0)
  const schedulePage = () => {
    switch (selected) {
      case 0:
        return (
          <SchedulePage
            date='Friday, February 3, 2023'
            events={scheduleEvents[0]}
          />
        )
      case 1:
        return (
          <SchedulePage
            date='Saturday, February 4, 2023'
            events={scheduleEvents[1]}
          />
        )
      case 2:
        return (
          <SchedulePage
            date='Sunday, February 5, 2023'
            events={scheduleEvents[2]}
          />
        )
    }
  }

  return (
    <div className='schedule'>
      <div className='schedule__title'>SCHEDULE</div>
      <ScheduleTabs
        pageNumbers={3}
        selected={selected}
        setSelected={setSelected}
      />
      {schedulePage()}
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
      {events.map(event => {
        return (
          <>
            <div className='schedule-page__event'>
              <div className='schedule-page__event--name'>{event.name}</div>
              <div className='schedule-page__event--time'>{event.time}</div>
            </div>
          </>
        )
      })}
    </div>
  )
}
export default Schedule
