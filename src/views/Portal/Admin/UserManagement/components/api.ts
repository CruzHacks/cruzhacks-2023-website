import axios from "axios"
import { Dispatch } from "react"
import { Message } from "../../../../../contexts/PortalBanners/PortalBanner"

export const getApplicants = async (
  getAccessTokenSilently: any,
  setBanner: Dispatch<Message>,
  setApplicants: Dispatch<Array<any>>
) => {
  try {
    const token = await getAccessTokenSilently()
    const getApplicantsAxiosRequest = {
      method: "get",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/application/applications`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await axios(getApplicantsAxiosRequest)
    const applicants = res.data.applications
    setApplicants(applicants)
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

export default getApplicants
