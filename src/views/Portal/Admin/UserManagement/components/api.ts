import axios from "axios"
import { Dispatch } from "react"
import { Message } from "../../../../../contexts/PortalBanners/PortalBanner"

export interface HackerProps {
  id: string
  email: string
  firstName: string
  lastName: string
  checkedIn: boolean
  attendanceStatus: string
}

const checkIn = async (
  getAccessTokenSilently: any,
  setBanner: Dispatch<Message>,
  hackerId: string
) => {
  try {
    console.log("PUT REQUEST")
    const token = await getAccessTokenSilently()
    const checkInAxiosRequest = {
      method: "put",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/admin/checkIn/${hackerId}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await axios(checkInAxiosRequest)
    setBanner({ message: res.data.message, messageType: "SUCCESS" })
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError: any = err
      console.log(err)
      setBanner({
        message: axiosError.response.data.error,
        messageType: "ERROR",
      })
    }
  }
}

export const getHackers = async (
  getAccessTokenSilently: any,
  setBanner: Dispatch<Message>,
  setHackers: Dispatch<Array<any>>
) => {
  try {
    const token = await getAccessTokenSilently()
    const getHackersAxiosRequest = {
      method: "get",
      /* eslint-disable */
      url: `${process.env.REACT_APP_ENDPOINT_URL}/admin/getHackers`,
      /* eslint-enable */
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await axios(getHackersAxiosRequest)
    const hackersData = res.data.hackers

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

export { checkIn }

export default getHackers
