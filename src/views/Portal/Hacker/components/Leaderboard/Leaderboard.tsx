/* eslint-disable max-len */
import React from "react"
import "./Leaderboard.scss"
import { ReactComponent as GoldTrophy } from "../../../../../assets/GoldTrophy.svg"
import { ReactComponent as SilverTrophy } from "../../../../../assets/SilverTrophy.svg"
import { ReactComponent as BronzeTrophy } from "../../../../../assets/BronzeTrophy.svg"

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material"

interface LeaderboardProps {
  position: number
  name: string
  college?: string
  points: number
}

const test_data: Array<LeaderboardProps> = [
  {
    position: 1,
    name: "Test Name 1",
    college: "Cowell",
    points: 5,
  },
  {
    position: 2,
    name: "Test Name 2",
    college: "Crown",
    points: 5,
  },
]

export const Leaderboard: React.FC = () => {
  return (
    <div className='leaderboard__container'>
      <div className='leaderboard__container__header'>
        CruzPoints Leaderboard
      </div>
      <TableContainer
        sx={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#E1E1E1",
          borderRadius: 2,
          width: "100%",
        }}
      >
        <Table>
          <TableBody>
            {test_data.map(row => (
              <TableRow key={row.position}>
                <TableCell component='th' scope='row'>
                  <PositionTableItem position={row.position} />
                </TableCell>
                <TableCell align='left'>
                  <NameTableItem name={row.name} college={row.college} />
                </TableCell>
                <TableCell align='center'>
                  <div className='points-table-item'>{row.points}pts</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

const PositionTableItem = (props: { position: number }) => {
  return (
    <div className='position-table-item'>
      <GoldTrophy className='position-table-item--trophy' />
      <div className='position-table-item--pos'>{props.position}</div>
    </div>
  )
}

const NameTableItem = (props: { name: string; college?: string }) => {
  return (
    <div className='name-table-item'>
      <div className='name-table-item--name'>{props.name}</div>
      <div className='name-table-item--college'>{props.college}</div>
    </div>
  )
}
