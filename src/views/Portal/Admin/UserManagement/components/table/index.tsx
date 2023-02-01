import React, { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import getApplicants from "../api"
import check from "../../../../../../images/icons/check.svg"
import x from "../../../../../../images/icons/x.svg"
/* eslint-disable */
import { useBanner } from "../../../../../../contexts/PortalBanners/PortalBanner"
/* eslint-enable */
import Spinner from "../../../../../../components/Spinner"
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
  SxProps,
} from "@mui/material"
/*
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
*/
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

const handleCheckin = (checkin: boolean) => {
  return checkin ? check : x
}

interface HackerProps {
  id: string
  name: string
  checkedIn: boolean
  status: string
  // last_activity: string
}

const ManageTable = () => {
  // Uncomment when ready to debug API call issue

  const [applicants, setApplicants] = useState<Array<any>>([])
  const { getAccessTokenSilently } = useAuth0()
  const [render, setRender] = useState<boolean>(false)
  const { setBanner } = useBanner()

  useEffect(() => {
    getApplicants(getAccessTokenSilently, setBanner, setApplicants).then(() =>
      setRender(true)
    )
  }, [])

  if (render) {
    return (
      <TableContainer className='hacker_table__container' component={Paper}>
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
            {applicants.map((applicant: HackerProps, index: number) => (
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
                        {applicant.checkedIn}
                      </div>
                      <img src={handleCheckin(applicant.checkedIn)} />
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
                {/*
                <TableCell sx={plainCellStyle} align='right'>
                  {applicant.last_activity}
                </TableCell>
                */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
  return (
    <div className='table-spinner'>
      <Spinner />
    </div>
  )
}

export default ManageTable
