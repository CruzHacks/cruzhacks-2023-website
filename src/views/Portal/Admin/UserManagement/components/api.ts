import axios from "axios"
import { Dispatch } from "react"
import { Message } from "../../../../../contexts/PortalBanners/PortalBanner"

export const getApplicants = async (
  getAccessTokenSilently: any,
  setBanner: Dispatch<Message>,
  setApplicants: Dispatch<object>
) => {
  try {
    const token = await getAccessTokenSilently()
    const getApplicantsAxiosRequest = {
      method: "get",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/applications`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await axios(getApplicantsAxiosRequest)
    const applicants = res.data.appDocuments
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
