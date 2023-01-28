import { Dispatch } from "react"
import axios from "axios"
import { TeamFormationProps } from "."
import { Message } from "../../../../contexts/PortalBanners/PortalBanner"

export const createTeam = async (
  getAccessTokenSilently: any,
  teamLeaderName: string,
  teamName: string,
  setTeamPage: Dispatch<Partial<TeamFormationProps>>,
  setBanner: Dispatch<Message>
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
    setTeamPage({
      teamName: res.data.teamName,
      teamMembers: res.data.members,
      teamLeader: res.data.teamLeader,
    })
    setBanner({ message: `${teamName} Created`, messageType: "SUCCESS" })
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

export const inviteTeamMember = async (
  getAccessTokenSilently: any,
  invitedMemberEmail: string,
  setTeamPage: Dispatch<Partial<TeamFormationProps>>,
  setBanner: Dispatch<Message>
) => {
  try {
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
    setTeamPage({ invitedTeamMembers: res.data.invitedMembers })
    setBanner({
      message: `Invite Sent To ${invitedMemberEmail}`,
      messageType: "SUCCESS",
    })
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

export const changeInvitationMode = async (
  getAccessTokenSilently: any,
  setTeamPage: Dispatch<Partial<TeamFormationProps>>,
  setBanner: Dispatch<Message>
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
    setTeamPage({ invitationType: res.data.newInvitationMode })
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

export const getTeamProfile = async (
  getAccessTokenSilently: any,
  teamPageDispatch: any,
  setBanner: Dispatch<Message>
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
    console.log(res.data)
    const teamProfile: Partial<TeamFormationProps> = {
      teamName: res.data.teamName,
      teamMembers: res.data.members,
      invitationType: res.data.invitationMode,
      invitations: res.data.invitations,
      invitedTeamMembers: res.data.invitedMembers,
      teamLeader: res.data.teamLeader,
    }
    teamPageDispatch(teamProfile)
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

export const removeTeamMember = async (
  getAccessTokenSilently: any,
  removeID: string,
  removeName: string,
  setTeamPage: Dispatch<Partial<TeamFormationProps>>,
  setBanner: Dispatch<Message>
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
    setTeamPage({
      teamMembers: res.data.newMembers,
      invitedTeamMembers: res.data.newInvitedMembers,
    })
    setBanner({
      message: `${removeName} Was Removed From Your Team`,
      messageType: "SUCCESS",
    })
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

export const rsvpInvite = async (
  getAccessTokenSilently: any,
  setTeamPage: Dispatch<Partial<TeamFormationProps>>,
  teamName: string,
  decision: string,
  setBanner: Dispatch<Message>
) => {
  try {
    const token = await getAccessTokenSilently()
    const acceptInviteAxiosRequest = {
      method: "post",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/teams/rsvpInvite`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
      data: {
        decision: decision,
        teamName: teamName,
      },
    }
    const res = await axios(acceptInviteAxiosRequest)
    setTeamPage({
      invitations: res.data.newInvitations,
      teamLeader: res.data.teamData.teamLeader,
      teamMembers: res.data.teamData.members,
      invitedTeamMembers: res.data.teamData.invitedTeamMembers,
    })
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

export const deleteTeam = async (
  getAccessTokenSilently: any,
  teamName: string,
  setTeamPage: Dispatch<Partial<TeamFormationProps>>,
  setBanner: Dispatch<Message>
) => {
  try {
    const token = await getAccessTokenSilently()
    const deleteTeamAxiosRequest = {
      method: "delete",
      url: `${process.env.REACT_APP_ENDPOINT_URL}/teams/deleteTeam`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORS_ORIGIN || "",
        Authorization: `Bearer ${token}`,
      },
      data: {
        teamName: teamName,
      },
    }
    const res = await axios(deleteTeamAxiosRequest)
    setBanner({ message: res.data.message, messageType: "SUCCESS" })
    setTeamPage({ teamName: "", teamMembers: [], teamLeader: "" })
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
