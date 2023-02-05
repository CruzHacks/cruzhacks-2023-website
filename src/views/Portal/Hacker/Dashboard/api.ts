import axios from "axios"
import { Dispatch } from "react"
import { Message } from "../../../../contexts/PortalBanners/PortalBanner"
// eslint-disable-next-line max-len
import { AttendanceStatus } from "./components/AttendanceStatus/AttendanceStatus"
import { LeaderboardProps } from "./components/Leaderboard/Leaderboard"

export const getHackerProfile = async (
  getAccessTokenSilently: any,
  setCruzPoints: Dispatch<number>,
  setAttendanceStatus: Dispatch<AttendanceStatus>,
  setBanner: Dispatch<Message>
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
    if (axios.isAxiosError(err)) {
      const axiosError: any = err
      setBanner({
        message: axiosError.response.data.error,
        messageType: "ERROR",
      })
    }
  }
}

export const confirmAttendance = async (
  getAccessTokenSilently: any,
  confirmedStatus: AttendanceStatus,
  setAttendanceStatus: Dispatch<AttendanceStatus>,
  setBanner: Dispatch<Message>
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
    setBanner({ message: res.data.message, messageType: "SUCCESS" })
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError: any = err
      setBanner({
        message: axiosError.response.data.error,
        messageType: "ERROR",
      })
    }
  }
}

export const submitCruzPointsCode = async (
  getAccessTokenSilently: any,
  code: string,
  setCruzPoints: Dispatch<number>,
  setBanner: Dispatch<Message>
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

    setCruzPoints(res.data.updatedPoints)
    setBanner({
      message: `Congrats! You now have ${res.data.updatedPoints} CruzPoints`,
      messageType: "SUCCESS",
    })
  } catch (err) {
    setBanner({
      message: `Invalid CruzPoints Code`,
      messageType: "ERROR",
    })
  }
}

export const getCruzPointsLeaderBoard = async (
  getAccessTokenSilently: any,
  setLeaderBoard: Dispatch<Array<LeaderboardProps>>
) => {
  try {
    const token = await getAccessTokenSilently()
    const submitCruzPointsAxiosRequest = {
      method: "get",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/cruzpoints/leaderboard`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await axios(submitCruzPointsAxiosRequest)

    setLeaderBoard(res.data.leaderboard)
  } catch (err) {
    setLeaderBoard([])
  }
}
