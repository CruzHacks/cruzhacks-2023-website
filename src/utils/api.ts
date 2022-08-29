import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const SUBSCRIBE_ENDPOINT =
  `${process.env.REACT_APP_MAILCHIMP_ENDPOINT}/subscribe` || ""

const API_KEY = process.env.REACT_APP_API_KEY || ""

export function subscribeMailchimp(userEmail: string) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authentication: API_KEY,
      "Content-Type": "application/json",
    },
  }

  return axios
    .post(
      SUBSCRIBE_ENDPOINT,
      {
        email: userEmail,
      },
      axiosConfig
    )
    .then((response: AxiosResponse) => ({
      status: response.status,
      data: response.data,
    }))
    .catch(err => ({
      status: null,
      data: err,
    }))
}
