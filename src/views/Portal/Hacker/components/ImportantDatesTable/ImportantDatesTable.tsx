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
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    id: 2,
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    id: 3,
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    id: 4,
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    id: 5,
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    id: 6,
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    id: 7,
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    id: 8,
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
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
