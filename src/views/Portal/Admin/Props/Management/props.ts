export interface ManageCardProps {
  title: string
  blurb: string
}

export const ManageCards: Array<ManageCardProps> = [
  {
    title: "MANAGE USERS",
    blurb:
      "Look over participants, judges, & speakers, \
      speakers. Check-in, edit groups, assign tables etc.",
  },
  {
    title: "QR CODE CHECK IN",
    blurb: "Scan hacker's QR codes to check them in.",
  },
  {
    title: "JUDGING",
    blurb: "Review hacker projects, score, disqualify, etc. through Devpost.",
  },
]
