import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

const RECAPTCHA_VERIFICATION_ENDPOINT =
  `${process.env.REACT_APP_ENDPOINT_URL}/verifyRecaptcha/submit` || ""

const RESEND_VERIFICATION_EMAIL_ENDPOINT =
  `${process.env.REACT_APP_ENDPOINT_URL}/auth/resend` || ""

const SUBSCRIBE_ENDPOINT =
  `${process.env.REACT_APP_ENDPOINT_URL}/subscribe` || ""

const METADATA_ENDPOINT =
  `${process.env.REACT_APP_ENDPOINT_URL}/auth/metadata` || ""

const API_KEY = process.env.REACT_APP_API_KEY || ""

export function resendVerificationEmail(
  userId: string | undefined,
  authToken: string
) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  const body = {
    userId,
  }
  return axios
    .post(RESEND_VERIFICATION_EMAIL_ENDPOINT, body, axiosConfig)
    .then((res: AxiosResponse) => res)
    .catch(err => err)
}

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

export function verifyRecaptchaToken(res: string | null, callback: any) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authentication: API_KEY || "",
      token: res || "",
    },
  }
  axios
    .post(RECAPTCHA_VERIFICATION_ENDPOINT, {}, axiosConfig)
    .then((response: AxiosResponse) => {
      if (response.status === 200) {
        return callback()
      }
      return response
    }) // after response 200, token validated: unlock verification button
    .catch(err => err)
}

export function updateUserTheme(theme: string, authToken: string) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  const body = {
    theme,
  }
  return axios
    .patch(METADATA_ENDPOINT, body, axiosConfig)
    .then((res: AxiosResponse) => res)
    .catch(err => err)
}

export function getUserTheme(authToken: string) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
  return axios
    .get(METADATA_ENDPOINT, axiosConfig)
    .then((res: AxiosResponse) => res)
    .catch(err => err)
}
