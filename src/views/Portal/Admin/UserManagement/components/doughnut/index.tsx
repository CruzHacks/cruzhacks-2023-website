import React from "react"
import DonutChart from "react-donut-chart"
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"
import {
  DemographicStats,
  DecisionStats,
  HackerStats,
  HackerStatsProps,
} from "../../../Props/HackerStats/props"
import "./index.scss"

export const DecisionData = () => (
  <div className='stats__container'>
    {DecisionStats.map(({ name, stats, colors }: HackerStatsProps) => (
      <div key={name} className='stats__container--donut'>
        <div className='stats__container--text'>{name}</div>
        <DonutChart
          className='donutchart--innertext'
          innerRadius={0.75}
          outerRadius={0.95}
          legend={false}
          height={320}
          width={320}
          colors={colors}
          strokeColor={"none"}
          data={stats}
        ></DonutChart>
      </div>
    ))}
  </div>
)

export const DemographicsData = () => (
  <div className='stats__container'>
    {DemographicStats.map(({ name, stats, colors }: HackerStatsProps) => (
      <div key={name} className='stats__container--donut'>
        <div className='stats__container--text'>{name}</div>
        <DonutChart
          className='donutchart--innertext'
          innerRadius={0.75}
          outerRadius={0.95}
          legend={false}
          height={320}
          width={320}
          colors={colors}
          strokeColor={"none"}
          data={stats}
        ></DonutChart>
      </div>
    ))}
  </div>
)

const ApplicantData = () => {
  const navigate = useNavigate()
  const { user } = useAuth0()
  const nickname = user && user.nickname
  const handleClick = () => {
    navigate(`../admin/${nickname}/overview`)
  }
  const handleDimensions = () => {
    if (window.innerWidth <= 992) {
      return 250
    }
    if (window.innerWidth <= 450) {
      return 200
    }
    return 320
  }
  return (
    <div className='stats__container'>
      {HackerStats.map(({ name, stats, colors }: HackerStatsProps) => (
        <div key={name} className='stats__container--donut'>
          <div className='stats__container--text'>{name}</div>
          <DonutChart
            className='donutchart--innertext'
            innerRadius={0.75}
            outerRadius={0.95}
            legend={false}
            height={handleDimensions()}
            width={handleDimensions()}
            colors={colors}
            strokeColor={"none"}
            data={stats}
          ></DonutChart>
        </div>
      ))}
      <div onClick={() => handleClick()} className='stats__container--link'>
        View More
      </div>
    </div>
  )
}

export default ApplicantData
