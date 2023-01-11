import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import {
  ManageCards,
  ManageCardProps,
} from "../../../../Props/Management/props"
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
  /*OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  SelectChangeEvent,
  Checkbox,*/
  Alert,
  AlertProps,
} from "@mui/material"
import { createNotification } from "../../../../utils/api"

import "./index.scss"

const ManageCard = (props: ManageCardProps) => (
  <div className='manage-card'>
    <div className='manage-card--title'>{props.title}</div>
    <div className='manage-card--blurb'>{props.blurb}</div>
  </div>
)

interface AnnouncementModalProps {
  modalOpen: boolean
  handleClose: () => void
}
/*
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

const recipients = ["Hackers", "Admin"]

const DropDown = ({ recipient, setRecipient }: any) => {
  const [checked, setChecked] = useState<boolean>(false)
  const handleChange = (event: SelectChangeEvent<typeof recipient>) => {
    const {
      target: { value },
    } = event
    console.log(value)
    if (value.indexOf("Everyone") === -1) {
      if (checked) setChecked(false)
      setRecipient(typeof value === "string" ? value.split(",") : value)
    } else handleEveryone()
  }
  const handleEveryone = () => {
    if (recipient.length === recipients.length && checked) {
      setRecipient([])
      setChecked(false)
    } else {
      setRecipient(recipients)
      setChecked(true)
    }
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
          input={
            <OutlinedInput
              sx={{
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#6F6FE8",
                },
              }}
              label='Group'
            />
          }
          renderValue={selected => selected.join(", ")}
          MenuProps={MenuProps}
        >
          <MenuItem value={"Everyone"}>
            <Checkbox
              sx={{
                color: "#6F6FE8",
                "&.Mui-checked": {
                  color: "#6F6FE8",
                },
              }}
              checked={checked}
            />
            <ListItemText primary={"Everyone"} />
          </MenuItem>
          {recipients.map(group => (
            <MenuItem key={group} value={group}>
              <Checkbox
                sx={{
                  color: "#6F6FE8",
                  "&.Mui-checked": {
                    color: "#6F6FE8",
                  },
                }}
                checked={recipient.indexOf(group) > -1}
              />
              <ListItemText primary={group} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}*/

const style1: SxProps = {
  minWidth: "325px",
  minHeight: "365px",
  bgcolor: "#FFFFFF",
  outline: "none",
  borderRadius: "6px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

const style2: SxProps = {
  minWidth: "505px",
  minHeight: "333px",
  bgcolor: "#FFFFFF",
  outline: "none",
  borderRadius: "6px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

const checkSize = () => {
  if (window.innerWidth <= 500) {
    return style1
  }
  return style2
}

interface ResponsesProps {
  message: string
  severity: AlertProps["severity"]
}
const responses: Array<ResponsesProps> = [
  {
    message: "Successfully Delivered Announcement 😎",
    severity: "success",
  },
  {
    message: "An announcement must have a body... 😑",
    severity: "warning",
  },
  {
    message: "Please select a recipient from the dropdown... 😑",
    severity: "warning",
  },
  {
    message: "Unable to deliver message, please try again. 🤬",
    severity: "error",
  },
]

const AnnouncementModal = ({
  modalOpen,
  handleClose,
}: AnnouncementModalProps) => {
  // const [recipient, setRecipient] = useState<string[]>([])
  const [notifyBody, setNotifyBody] = useState<string>("")
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertVariant, setAlertVariant] = useState(0)

  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (alertOpen) setTimeout(() => setAlertOpen(false), 5000)
  }, [alertOpen])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setNotifyBody(e.target.value)
  const handleSubmit = () => {
    if (notifyBody === "") {
      setAlertOpen(true)
      setAlertVariant(1)
      return
    }
    /* if (recipient.length === 0) {
      setAlertOpen(true)
      setAlertVariant(2)
      return
    } */
    getAccessTokenSilently().then(accessToken => {
      const message = {
        topic: "Announcements",
        title: "",
        body: notifyBody,
      }
      createNotification(message, accessToken)
        .then(res => {
          if (res.status === 201) {
            setAlertVariant(0)
            setAlertOpen(true)
            setNotifyBody("")
          } else {
            throw new Error(res.body.message)
          }
        })
        .catch(err => {
          setAlertVariant(3)
          setAlertOpen(true)
        })
    })
  }
  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby='announcement modal'
      aria-describedby='choose message for'
    >
      <Fade in={modalOpen}>
        <Box sx={checkSize}>
          {alertOpen && (
            <Fade in={alertOpen} unmountOnExit>
              <Alert
                className='announcement-alert'
                severity={responses[alertVariant].severity}
              >
                {responses[alertVariant].message}
              </Alert>
            </Fade>
          )}
          <div className='announcement-modal__container'>
            <div className='announcement-modal__container--title'>
              What do you want to say?
            </div>
            {/*
            <div className='announcement-modal__container--dropdown'>
              <DropDown recipient={recipient} setRecipient={setRecipient} />
            </div>
            */}
            <textarea
              className='announcement-modal__container--input'
              value={notifyBody}
              onChange={e => handleChange(e)}
            />
            <div
              className='announcement-modal__container--submit'
              onClick={handleSubmit}
            >
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

  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)
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
        <div
          className='admindash__container--announcement'
          onClick={handleOpen}
        >
          <a>Make Live Announcement</a>
        </div>
        <AnnouncementModal modalOpen={modalOpen} handleClose={handleClose} />
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
