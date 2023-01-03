import { Dispatch } from "react"
import axios from "axios"
import {
  Invitation,
  InvitationMode,
} from "./components/TeamBuilder/TeamBuilder"
import { TeamMember } from "./components/TeamDisplay/TeamDisplay"

export const getHackerProfile = async (
  getAccessTokenSilently: any,
  setInvitationType: Dispatch<number>,
  setTeamName: Dispatch<boolean>
) => {
  try {
    const token = await getAccessTokenSilently()
    const getHackerProfileAxiosRequest = {
      method: "get",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/teams/teamProfile`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await axios(getHackerProfileAxiosRequest)
    const profile = res.data.hackerProfile

    setTeamName(profile.teamName)
    setInvitationType(profile.invitationMode)
  } catch (err) {
    console.log(err)
  }
}

export const createTeam = async (
  getAccessTokenSilently: any,
  teamLeaderName: string,
  teamName: string,
  setTeamName: Dispatch<string>,
  setTeamMembers: Dispatch<Array<TeamMember>>
) => {
  try {
    const token = await getAccessTokenSilently()
    const createTeamAxiosRequest = {
      method: "post",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/teams/createTeam`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
      data: {
        teamLeaderName: teamLeaderName,
        teamName: teamName,
      },
    }

    const res = await axios(createTeamAxiosRequest)
    setTeamName(res.data.teamName)
    setTeamMembers(res.data.members)
    console.log(res.data)
  } catch (err) {
    console.log(err)
  }
}

export const inviteTeamMember = async (
  getAccessTokenSilently: any,
  invitedMemberEmail: string
) => {
  const token = await getAccessTokenSilently()
  const createTeamAxiosRequest = {
    method: "post",
    url: `${process.env.REACT_APP_ENDPOINT_URL}/teams/inviteTeamMember`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
      Authorization: `Bearer ${token}`,
    },
    data: {
      invitedMember: invitedMemberEmail,
    },
  }

  const res = await axios(createTeamAxiosRequest)
  console.log(res.data)
}

export const changeInvitationMode = async (
  getAccessTokenSilently: any,
  setInvitationType: Dispatch<InvitationMode>
) => {
  try {
    const token = await getAccessTokenSilently()
    const changeInvitationModeAxiosRequest = {
      method: "put",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/teams/changeInvitationMode`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await axios(changeInvitationModeAxiosRequest)
    console.log(res.data)
    setInvitationType(res.data.newInvitationMode)
  } catch (err) {
    console.log(err)
  }
}

export const getTeamProfile = async (
  getAccessTokenSilently: any,
  setTeamName: Dispatch<string>,
  setTeamMembers: Dispatch<Array<TeamMember>>,
  setInvitationType: Dispatch<InvitationMode>,
  setInvitations: Dispatch<Array<Invitation>>
) => {
  try {
    const token = await getAccessTokenSilently()
    const getTeamProfileAxiosRequest = {
      method: "get",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/teams/teamProfile`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await axios(getTeamProfileAxiosRequest)
    setTeamName(res.data.teamName)
    setTeamMembers(res.data.members)
    setInvitationType(res.data.invitationMode)
    setInvitations(res.data.invitations)
  } catch (err) {
    console.log(err)
  }
}

export const removeTeamMember = async (
  getAccessTokenSilently: any,
  removeID: string
) => {
  try {
    const token = await getAccessTokenSilently()
    const removeMemberAxiosRequest = {
      method: "delete",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/teams/removeMember`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
      data: {
        teamMemberToRemove: removeID,
      },
    }
    const res = await axios(removeMemberAxiosRequest)
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
