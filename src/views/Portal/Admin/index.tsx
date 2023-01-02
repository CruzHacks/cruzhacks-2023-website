import React, { useState, Dispatch } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { ManageCards, ManageCardProps } from "../../../Props/Management/props"

import {
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

import "./index.scss"

const ManageCard = (props: ManageCardProps) => (
  <div className='manage-card'>
    <div className='manage-card--title'>{props.title}</div>
    <div className='manage-card--blurb'>{props.blurb}</div>
  </div>
)

interface AnnouncementModalProps {
  modalOpen: boolean
  setModalOpen: Dispatch<boolean>
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 225,
      width: 300,
    },
  },
}

const DropStyle1: SxProps = {
  width: 270,
}

const DropStyle2: SxProps = { m: 1, width: 300 }

const checkDropStyle = () => {
  if (window.innerWidth <= 992) {
    return DropStyle1
  }
  return DropStyle2
}

const recipients = ["Everyone", "Hackers", "Judges"]

const DropDown = () => {
  const [recipient, setRecipient] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof recipient>) => {
    const {
      target: { value },
    } = event
    setRecipient(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    )
  }

  return (
    <div>
      <FormControl sx={checkDropStyle}>
        <InputLabel id='label'>Group</InputLabel>
        <Select
          labelId='label'
          id='demo-multiple-checkbox'
          multiple
          value={recipient}
          onChange={handleChange}
          input={<OutlinedInput label='Group' />}
          renderValue={selected => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {recipients.map(group => (
            <MenuItem key={group} value={group}>
              <Checkbox checked={recipient.indexOf(group) > -1} />
              <ListItemText primary={group} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

const style1: SxProps = {
  width: "325px",
  height: "365px",
  bgcolor: "#FFFFFF",
  outline: "none",
  borderRadius: "6px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

const style2: SxProps = {
  width: "705px",
  height: "465px",
  bgcolor: "#FFFFFF",
  outline: "none",
  borderRadius: "6px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

const checkSize = () => {
  if (window.innerWidth <= 992) {
    return style1
  }
  return style2
}

const AnnouncementModal = ({
  modalOpen,
  setModalOpen,
}: AnnouncementModalProps) => {
  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby='announcement modal'
      aria-describedby='choose message for'
    >
      <Fade in={modalOpen}>
        <Box sx={checkSize}>
          <div className='announcement-modal__container'>
            <div className='announcement-modal__container--title'>
              Who is this message for?
            </div>
            <div className='announcement-modal__container--dropdown'>
              <DropDown />
            </div>
            <textarea className='announcement-modal__container--input' />
            <div className='announcement-modal__container--submit'>
              <a>Submit</a>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

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
]

const ProjectTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell align='right'>Check In</TableCell>
            <TableCell align='right'>Status</TableCell>
            <TableCell align='right'>Role</TableCell>
            <TableCell align='right'>Last Activity</TableCell>
            <TableCell align='right'>Evaluation Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='right'>{row.name}</TableCell>
              <TableCell align='right'>{row.check_in}</TableCell>
              <TableCell align='right'>{row.status}</TableCell>
              <TableCell align='right'>{row.role}</TableCell>
              <TableCell align='right'>{row.last_activity}</TableCell>
              <TableCell align='right'>{row.eval_prog}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const AdminDash: React.FC = () => {
  const { user } = useAuth0()
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  return (
    <div className='admindash__container'>
      <div className='admindash__container--top'>
        <div className='admindash__container--title'>
          <div className='admindash__container--text1'>
            Welcome back, {user && user.name}
          </div>
          <div className='admindash__container--text2'>
            What would you like to do today?
          </div>
        </div>
        <div className='admindash__container--announcement'>
          <a onClick={() => setModalOpen(true)}>Make Live Announcement</a>
          <AnnouncementModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        </div>
      </div>
      <div className='admindash__container--boxes'>
        {ManageCards.map(({ title, blurb }: ManageCardProps) => (
          <ManageCard key={title} title={title} blurb={blurb} />
        ))}
      </div>
      <div className='admindash__container--text3'>Project Submissions</div>
      <div className='admindash__container--table'>
        <ProjectTable />
      </div>
    </div>
  )
}

export default AdminDash
