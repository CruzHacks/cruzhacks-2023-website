import axios from "axios"
import { Dispatch } from "react"
// eslint-disable-next-line max-len
import { AttendanceStatus } from "./components/AttendanceStatus/AttendanceStatus"

export const getHackerProfile = async (
  getAccessTokenSilently: any,
  setCruzPoints: Dispatch<number>,
  setAttendanceStatus: Dispatch<AttendanceStatus>
) => {
  try {
    const token = await getAccessTokenSilently()
    const getHackerProfileAxiosRequest = {
      method: "get",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/hacker/hackerProfile`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await axios(getHackerProfileAxiosRequest)
    const profile = res.data.hackerProfile
    setCruzPoints(profile.cruzPoints)
    setAttendanceStatus(profile.attendanceStatus)
  } catch (err) {
    console.log(err)
  }
}

export const confirmAttendance = async (
  getAccessTokenSilently: any,
  confirmedStatus: AttendanceStatus,
  setAttendanceStatus: Dispatch<AttendanceStatus>
) => {
  try {
    const token = await getAccessTokenSilently()
    const confirmAttendanceAxiosRequest = {
      method: "put",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/hacker/setAttendanceStatus`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
      data: {
        confirmedStatus: confirmedStatus,
      },
    }
    const res = await axios(confirmAttendanceAxiosRequest)
    setAttendanceStatus(res.data.attendanceStatus)
  } catch (err) {
    console.log(err)
  }
}

export const submitCruzPointsCode = async (
  getAccessTokenSilently: any,
  code: string,
  setCruzPoints: Dispatch<number>
) => {
  try {
    const token = await getAccessTokenSilently()
    const submitCruzPointsAxiosRequest = {
      method: "post",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/cruzpoints/submitCode`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
      data: {
        code: code,
      },
    }
    const res = await axios(submitCruzPointsAxiosRequest)
    if (res.status == 200) {
      setCruzPoints(res.data.updatedPoints)
    }
  } catch (err) {
    console.log(err)
  }
}
