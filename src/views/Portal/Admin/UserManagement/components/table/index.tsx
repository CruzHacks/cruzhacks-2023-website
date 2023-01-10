import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import getApplicants from "../api"
import check from "../../../../../../images/icons/check.svg"
import x from "../../../../../../images/icons/x.svg"
import {
  BannerProvider,
  useBanner,
} from "../../../../../../contexts/PortalBanners/PortalBanner"
import "./index.scss"

import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Fade,
  Box,
  SxProps,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  SelectChangeEvent,
  Checkbox,
} from "@mui/material"

const createDummy = (
  id: string,
  name: string,
  check_in: string,
  status: string,
  role: string,
  last_activity: string,
  eval_prog: string
) => {
  return { id, name, check_in, status, role, last_activity, eval_prog }
}

const rows = [
  createDummy(
    "1235",
    "Dummy",
    "Not Applicable",
    "Not Applicable",
    "Hacker",
    "Never",
    "Not Applicable"
  ),
  createDummy(
    "1235",
    "Dummy",
    "Checked In",
    "Accepted",
    "Judge",
    "Never",
    "Not Applicable"
  ),
  createDummy(
    "1235",
    "Dummy",
    "Not Checked In",
    "Rejected",
    "Hacker",
    "Never",
    "Not Applicable"
  ),
  createDummy(
    "1235",
    "Dummy",
    "Not Applicable",
    "Not Applicable",
    "Judge",
    "Never",
    "Not Applicable"
  ),
]

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#FAFBFF",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

const headStyle: SxProps = {
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 20,
  fontHeight: 27,

  color: "#000000",
}

const plainCellStyle: SxProps = {
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 16,
  fontHeight: 22,
  color: "#000000",
}

const handleStatus = (status: string) => {
  if (status == "Accepted") {
    return "accept"
  }
  if (status == "Rejected") {
    return "reject"
  }
  return "not_applicable"
}

const handleCheckin = (checkin: string) => {
  if (checkin == "Checked In") {
    return check
  }
  return x
}

const ManageTable = () => {
  const [applicants, setApplicants] = useState<object>()
  const { getAccessTokenSilently } = useAuth0()
  const [render, setRender] = useState<boolean>(false)
  const { setBanner } = useBanner()

  /*
  useEffect(() => {
    getApplicants(getAccessTokenSilently, setBanner, setApplicants).then(() =>
      setRender(true)
    )
  }, [])

  console.log(applicants)
*/
  //if (render) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow sx={{ bgcolor: "#FAFBFF" }}>
            <TableCell sx={headStyle}>ID</TableCell>
            <TableCell align='right' sx={headStyle}>
              Name
            </TableCell>
            <TableCell sx={headStyle} align='right'>
              Check In
            </TableCell>
            <TableCell sx={headStyle} align='right'>
              Status
            </TableCell>
            <TableCell sx={headStyle} align='right'>
              Role
            </TableCell>
            <TableCell sx={headStyle} align='right'>
              Last Activity
            </TableCell>
            <TableCell sx={headStyle} align='right'>
              Evaluation Progress
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((applicant, index) => (
            <StyledTableRow key={index}>
              <TableCell sx={plainCellStyle} component='th' scope='row'>
                {applicant.id}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Nunito Sans",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 16,
                  fontHeight: 22,
                  color: "#6488E5",
                }}
                align='right'
              >
                {applicant.name}
              </TableCell>
              <TableCell sx={plainCellStyle} align='right'>
                {
                  <div className='check_in__container'>
                    <div className='check_in__container--text'>
                      {applicant.check_in}
                    </div>
                    <img src={handleCheckin(applicant.check_in)} />
                  </div>
                }
              </TableCell>
              <TableCell align='right'>
                <div
                  className={`status__container-${handleStatus(
                    applicant.status
                  )}`}
                >
                  <div className='status__container'>{applicant.status}</div>
                </div>
              </TableCell>
              <TableCell sx={plainCellStyle} align='right'>
                {applicant.role}
              </TableCell>
              <TableCell sx={plainCellStyle} align='right'>
                {applicant.last_activity}
              </TableCell>
              <TableCell sx={plainCellStyle} align='right'>
                {applicant.eval_prog}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
  //}
  //return <div>Could Not Load Table</div>
}

export default ManageTable
