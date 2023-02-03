import { useAuth0 } from "@auth0/auth0-react"
import { Box, Fade, Modal, SxProps } from "@mui/material"
import axios from "axios"
import React, { Dispatch, useState } from "react"
import "./index.scss"

const CruzPointsManager = () => {
  const [visibility, setVisibility] = useState(false)
  return (
    <div className='manager'>
      <CreateActivityModal
        visibility={visibility}
        setVisibility={setVisibility}
      />
      <button onClick={() => setVisibility(true)}>Open</button>
    </div>
  )
}

const style: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  border: "2px solid #243d5e",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
}

const CreateActivityModal = (props: {
  visibility: boolean
  setVisibility: Dispatch<boolean>
}) => {
  const [availabilityDate, setAvailabilityDate] = useState<string>("")
  const [expirationDate, setExpirationDate] = useState<string>("")
  const [activityName, setActivityName] = useState<string>("")
  const [activityPoints, setActivityPoints] = useState<number>()
  const [activityType, setActivityType] = useState<string>("")
  const { getAccessTokenSilently } = useAuth0()

  const submitCruzPointsCode = async () => {
    try {
      const token = await getAccessTokenSilently()
      const data = JSON.stringify({
        activity: activityName,
        points: activityPoints,
        availabilityTime: availabilityDate,
        expirationTime: expirationDate,
        activityType: activityType,
      })

      const config = {
        method: "post",
        url: `${process.env.REACT_APP_ENDPOINT_URL}/cruzpoints/createActivity`,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            process.env.REACT_APP_CORS_ORIGIN || "",
          Authorization: `Bearer ${token}`,
        },
        data: data,
      }
      const res = await axios(config)
      console.log(res)
    } catch (err) {
      // Hi
    }
  }

  return (
    <Modal open={props.visibility} onClose={() => props.setVisibility(false)}>
      <Fade in={props.visibility}>
        <Box sx={style}>
          <div className='activity'>
            <div className='activity__container'>
              <DatePicker
                text='Availability Time'
                date={availabilityDate}
                setDate={setAvailabilityDate}
              />
              <DatePicker
                text='Expiration Time'
                date={expirationDate}
                setDate={setExpirationDate}
              />
              <div className='activity__container__activity-name'>
                Activity Name
              </div>
              <input
                type='text'
                className='activity__container__activity-name--chooser'
                value={activityName}
                onChange={e => setActivityName(e.target.value)}
              />
              <div className='activity__container__activity-name'>
                Activity Points
              </div>
              <input
                type='number'
                min={0}
                className='activity__container__activity-name--chooser'
                value={activityPoints}
                onChange={e => setActivityPoints(e.target.valueAsNumber)}
              />
              <div className='activity__container__activity-type'>
                Activity Type
              </div>
              <select
                name='Activity Type'
                className='activity__container__activity-type--chooser'
                value={activityType}
                onChange={e => {
                  setActivityType(e.target.value)
                  console.log(e.target.value)
                }}
              >
                <option>HackathonWorkshops</option>
              </select>
              <button
                className='activity__container__submit'
                onClick={() => submitCruzPointsCode()}
              >
                Submit
              </button>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

const DatePicker = (props: {
  text: string
  date: string
  setDate: Dispatch<string>
}) => {
  return (
    <div className='datepicker'>
      <div className='datepicker--title'>{props.text}</div>
      <input
        type='datetime-local'
        className='datepicker--input'
        value={props.date}
        onChange={e => {
          props.setDate(e.target.value)
          console.log(e.target.value)
        }}
      />
    </div>
  )
}

export default CruzPointsManager
