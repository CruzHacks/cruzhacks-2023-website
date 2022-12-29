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
  date: string
  event: string
}

const testImportantDates: Array<ImportantDatesTableItemProps> = [
  {
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
    date: "Nov 31, 2022: 11:59 PM PST",
    event: "Applications Close",
  },
  {
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
            <TableRow key={event.event}>
              <TableCell sx={{ border: "none", padding: "10px" }}>
                <ImportantDatesTableItem
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
