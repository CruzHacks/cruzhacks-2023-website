import React, { useEffect, useState, Dispatch } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import getHackers, { HackerProps } from "../api"
import check from "../../../../../../images/icons/check.svg"
import x from "../../../../../../images/icons/x.svg"
/* eslint-disable */
import { useBanner } from "../../../../../../contexts/PortalBanners/PortalBanner"
/* eslint-enable */
import Spinner from "../../../../../../components/Spinner"
import HackerProfileDrawer from "../drawer/index"
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

const handleStatusCSS = (status: boolean) => {
  return status ? "accept" : "reject"
}

const handleStatusText = (status: boolean) => {
  return status ? "accepted" : "not accepted"
}

const handleCheckin = (checkin: boolean) => {
  return checkin ? check : x
}

const handleCheckInText = (checkin: boolean) => {
  return checkin ? "Checked In" : "Not Checked In"
}

export interface HackerDrawerProps {
  drawerOpen: boolean
  setDrawerOpen: Dispatch<boolean>
  props: HackerProps
}

const handleDrawerOpen = (
  event: any,
  setDrawerOpen: Dispatch<boolean>,
  setProps: Dispatch<HackerProps>,
  hacker: HackerProps
) => {
  console.log(event)
  setDrawerOpen(true)
  setProps(hacker)
}

const ManageTable = () => {
  // Uncomment when ready to debug API call issue

  const [hackers, setHackers] = useState<Array<any>>([])
  const { getAccessTokenSilently } = useAuth0()
  const [render, setRender] = useState<boolean>(false)
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const { setBanner } = useBanner()
  const [hackerDrawerProps, setDrawerProps] = useState<HackerProps>({
    email: "dummy",
    firstName: "dummy",
    lastName: "dummy",
    checkedIn: false,
    status: false,
  })

  useEffect(() => {
    getHackers(getAccessTokenSilently, setBanner, setHackers).then(() =>
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
              <TableCell align='left' sx={headStyle}>
                Name
              </TableCell>
              <TableCell sx={headStyle} align='left'>
                Check In
              </TableCell>
              <TableCell sx={headStyle} align='left'>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hackers.map((hacker: HackerProps, index: number) => (
              <StyledTableRow
                key={index}
                onClick={() =>
                  handleDrawerOpen(index, setDrawerOpen, setDrawerProps, hacker)
                }
                className={`row-${index}`}
              >
                <HackerProfileDrawer
                  drawerOpen={drawerOpen}
                  setDrawerOpen={setDrawerOpen}
                  props={hackerDrawerProps}
                />
                <TableCell
                  sx={plainCellStyle}
                  component='th'
                  scope='row'
                  align='left'
                >
                  {hacker.email}
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
                  align='left'
                >
                  {hacker.firstName + " " + hacker.lastName}
                </TableCell>
                {
                  <TableCell sx={plainCellStyle} align='left'>
                    {
                      <div className='check_in__container'>
                        <div className='check_in__container--text'>
                          {handleCheckInText(hacker.checkedIn)}
                        </div>
                        <img src={handleCheckin(hacker.checkedIn)} />
                      </div>
                    }
                  </TableCell>
                }
                <TableCell align='left'>
                  <div
                    className={`status__container-${handleStatusCSS(
                      hacker.status
                    )}`}
                  >
                    <div className='status__container'>
                      {handleStatusText(hacker.status)}
                    </div>
                  </div>
                </TableCell>
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
