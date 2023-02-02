import { ChecklistItemProps } from "../components/ChecklistItem/ChecklistItem"

export const checklistProps: Array<ChecklistItemProps> = [
  {
    checklistNum: 1,
    title: "Accept Invitation",
    message: `Let us know you will be joining us! 
    We want to make sure we are ready to give you 
    the best experience for Cruzhacks 2023`,
    buttonText: "Accept",
    unClickableText: "Accepted",
    isUnclickable: true,
    onClick: () => {},
  },
  {
    checklistNum: 2,
    title: "Create or join a team",
    message: `What’s a hackathon without a group 
    of fellow hackers? Find your team to start 
    innovating!`,
    buttonText: "Get Started",
    isUnclickable: false,
    unClickableText: "Get Started",
    onClick: () => {},
  },
  {
    checklistNum: 3,
    title: "Check out our Hackerpack",
    message: `You can find everything you need to 
    know in our hacker packet PDF. It covers what 
    you need to bring, travel info, workshop info, 
    and more!`,
    buttonText: "HackerPack",
    isUnclickable: false,
    unClickableText: "HackerPack",
    onClick: () => {
      window.open(
        // eslint-disable-next-line max-len
        "https://docs.google.com/document/d/e/2PACX-1vTHyuHwcNdhtdovapKJCD5SAlRBkmFsfolBVPRDmoN1O9l6E-nQ0j8AAYWr5_edgVV6JgqdbIkhUYnQ/pub",
        "_blank"
      )
    },
  },
]
