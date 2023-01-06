import React from "react"

import "./ImportantDatesTable.scss"

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material"

interface ImportantDatesTableItemProps {
  id: number
  date: string
  event: string
}

const testImportantDates: Array<ImportantDatesTableItemProps> = [
  {
    id: 1,
    date: "Jan 9, 2023: 11:59 PM PST",
    event: "Deadline to confirm your spot at CruzHacks 2023",
  },
  {
    id: 2,
    date: "Jan 11, 2023: 8:00 PM PST",
    event: "Hacker Packet Released! Check it out for need-to-know information!",
  },
  {
    id: 3,
    date: "Jan 13, 2023: 5:00 PM PST",
    event:
      "Check-in begins in front of Stevenson Event Center at UC Santa Cruz",
  },
  {
    id: 4,
    date: "Jan 13, 2023: 7:00 PM PST",
    event: "Opening Ceremony begins",
  },
  {
    id: 5,
    date: "Jan 13, 2023: 9:00 PM PST",
    event: "Hacking begins, Workshops begin",
  },
  {
    id: 6,
    date: "Jan 15, 2023: 9:00 AM PST",
    event: "Code Freeze",
  },
  {
    id: 7,
    date: "Jan 15, 2023: 11:00 AM PST",
    event: "Expo/Demo/Judging begins",
  },
  {
    id: 8,
    date: "Jan 15, 2023: 2:00 PM PST",
    event: "Closing Ceremony begins, Winners announced",
  },
  {
    id: 9,
    date: "Jan 15, 2023: 4:00 PM PST",
    event: "CruzHacks 2023 Concludes",
  },
]

export const ImportantDatesTable = () => {
  return (
    <TableContainer sx={{ overflowY: "scroll", maxHeight: "100%" }}>
      <Table>
        <TableBody>
          {testImportantDates.map((event: ImportantDatesTableItemProps) => (
            <TableRow key={event.id}>
              <TableCell sx={{ border: "none", padding: "10px" }}>
                <ImportantDatesTableItem
                  id={event.id}
                  date={event.date}
                  event={event.event}
                ></ImportantDatesTableItem>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const ImportantDatesTableItem = (props: ImportantDatesTableItemProps) => {
  return (
    <div className='important-dates-table-item'>
      <div className='important-dates-table-item--date'>{props.date}</div>
      <div> &nbsp;-&nbsp;&nbsp;</div>
      <div className='important-dates-table-item--event'>{props.event}</div>
    </div>
  )
}
