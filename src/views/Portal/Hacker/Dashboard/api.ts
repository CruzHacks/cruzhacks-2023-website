import axios from "axios"
import { Dispatch } from "react"

export const getProfile = async (
  getAccessTokenSilently: any,
  setCruzPoints: Dispatch<number>,
  setAttendanceStatus: Dispatch<boolean>
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
    if (profile.isAttending === true || profile.isAttending === false) {
      setAttendanceStatus(profile.isAttending)
    }
  } catch (err) {
    console.log(err)
  }
}

export const confirmAttendance = async (
  getAccessTokenSilently: any,
  setAttendanceStatus: Dispatch<boolean>
) => {
  try {
    const token = await getAccessTokenSilently()
    const confirmAttendanceAxiosRequest = {
      method: "put",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/hacker/isAttending`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await axios(confirmAttendanceAxiosRequest)
    if (res.status === 200) {
      setAttendanceStatus(true)
    }
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
