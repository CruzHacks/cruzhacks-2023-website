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
    isUnclickable: true,
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
    isUnclickable: true,
    unClickableText: "HackerPack",
    onClick: () => {},
  },
]
