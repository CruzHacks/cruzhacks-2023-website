import axios from "axios"
import { Dispatch } from "react"
import { Message } from "../../../../../contexts/PortalBanners/PortalBanner"

export interface HackerProps {
  email: string
  firstName: string
  lastName: string
  checkedIn: boolean
  status: boolean
}

const getHackers = async (
  getAccessTokenSilently: any,
  setBanner: Dispatch<Message>,
  setHackers: Dispatch<Array<any>>
) => {
  try {
    const token = await getAccessTokenSilently()
    const getHackersAxiosRequest = {
      method: "get",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/admin/getHackers`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await axios(getHackersAxiosRequest)
    const hackersData = res.data.hackers

    /*
    const hackerData = <Array<HackerProps>>
    hackerArray.forEach(hacker => {
      hackersData.push({
        email: hacker.email,
        firstName: hacker.firstName,
        lastName: hacker.lastName,
        checkedIn: false,
        status: hacker.attendanceStatus,
      })
    })
    */
    setHackers(hackersData)
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

export default getHackers
