/* eslint-disable max-len */
import React from "react"
import "./Leaderboard.scss"
import { ReactComponent as GoldTrophy } from "../../../../../../assets/GoldTrophy.svg"
import { ReactComponent as SilverTrophy } from "../../../../../../assets/SilverTrophy.svg"
import { ReactComponent as BronzeTrophy } from "../../../../../../assets/BronzeTrophy.svg"

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material"

export interface LeaderboardProps {
  id: number
  position: number
  name: string
  college?: string
  points: number
}

export const Leaderboard = (props: {
  leaderboardData?: Array<LeaderboardProps>
}) => {
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
          maxHeight: "75%",
          overflowY: "auto",
          marginBottom: "30px",
        }}
      >
        <Table>
          <TableBody sx={{ height: 225 }}>
            {props.leaderboardData ? (
              props.leaderboardData.map((row: LeaderboardProps) => (
                <TableRow key={row.id} sx={{ height: 40 }}>
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
              ))
            ) : (
              <div className='leaderboard__container__no-leaderboard'>
                <div>No Leaderboard Stats</div>
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

const PositionTableItem = (props: { position: number }) => {
  const Trophy = (props: { position: number }) => {
    switch (props.position) {
      case 1:
        return <GoldTrophy className='position-table-item--trophy' />
      case 2:
        return <SilverTrophy className='position-table-item--trophy' />
      case 3:
        return <BronzeTrophy className='position-table-item--trophy' />
      default:
        return <div className='position-table-item--trophy' />
    }
  }
  return (
    <div className='position-table-item'>
      <Trophy position={props.position} />
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
