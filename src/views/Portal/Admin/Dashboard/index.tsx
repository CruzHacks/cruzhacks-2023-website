import React, { useState, Dispatch } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { ManageCards, ManageCardProps } from "../Props/Management/props"
import { useNavigate } from "react-router-dom"

import {
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

const ManageCard = (props: ManageCardProps) => {
  const navigate = useNavigate()
  const { user } = useAuth0()
  const nickname = user && user.nickname
  const openPage = (title: string) => {
    if (title === "MANAGE USERS") {
      navigate(`../admin/${nickname}/users`)
    }
    if (title === "JUDGING") {
      return window.open("https://cruzhacks-2023.devpost.com/users/login")
    }
  }

  return (
    <div onClick={() => openPage(props.title)} className='manage-card'>
      <div className='manage-card--title'>{props.title}</div>
      <div className='manage-card--blurb'>{props.blurb}</div>
    </div>
  )
}

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
    setRecipient(typeof value === "string" ? value.split(",") : value)
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
  if (window.innerWidth <= 500) {
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
    </div>
  )
}

export default AdminDash
