import { Item } from "react-donut-chart/dist/DonutChart"

const age = [
  {
    label: "<18",
    value: 28,
  },
  {
    label: "18",
    value: 194,
  },
  {
    label: "19",
    value: 131,
  },
  {
    label: "20",
    value: 103,
  },
  {
    label: "21",
    value: 96,
  },
  {
    label: "22",
    value: 50,
  },
  {
    label: ">22",
    value: 77,
  },
]

const school = [
  {
    label: "UC Santa Cruz",
    value: 504,
  },
  {
    label: "San Jose State",
    value: 14,
  },
  {
    label: "Minerva University",
    value: 6,
  },
  {
    label: "UC Berkeley",
    value: 6,
  },
  {
    label: "UC San Diego",
    value: 6,
  },
  {
    label: "CSU Monterey Bay",
    value: 5,
  },
  {
    label: "Monta Vista HS",
    value: 5,
  },
  {
    label: "Other",
    value: 95,
  },
]

const affiliation = [
  {
    label: "College 9",
    value: 92,
  },
  {
    label: "Cowell",
    value: 44,
  },
  {
    label: "Crown",
    value: 95,
  },
  {
    label: "John R. Lewis",
    value: 126,
  },
  {
    label: "Merrill",
    value: 41,
  },
  {
    label: "Kresge",
    value: 20,
  },
  {
    label: "Porter",
    value: 24,
  },
  {
    label: "Oakes",
    value: 18,
  },
  {
    label: "Rachel Carson",
    value: 25,
  },
  {
    label: "Stevenson",
    value: 27,
  },
  {
    label: "UCSC Grad Student",
    value: 20,
  },
  {
    label: "N/A",
    value: 165,
  },
]

const major = [
  {
    label: "Computer Science",
    value: 590,
  },
  {
    label: "Engineering",
    value: 36,
  },
  {
    label: "Information Systems",
    value: 26,
  },
  {
    label: "Natural Science",
    value: 25,
  },
  {
    label: "Math/Stats",
    value: 24,
  },
  {
    label: "Web Development",
    value: 32,
  },
  {
    label: "Business",
    value: 12,
  },
  {
    label: "Social Science",
    value: 15,
  },
  {
    label: "Other",
    value: 40,
  },
]

const sexuality = [
  {
    label: "Straight",
    value: 503,
  },
  {
    label: "Gay/Lesbian",
    value: 15,
  },
  {
    label: "Bisexual",
    value: 49,
  },
  {
    label: "Queer",
    value: 32,
  },
  {
    label: "Prefer Not to Answer",
    value: 110,
  },
]

const identification = [
  {
    label: "Asian Indian",
    value: 264,
  },
  {
    label: "Black or African",
    value: 14,
  },
  {
    label: "Chinese",
    value: 104,
  },
  {
    label: "Filipino",
    value: 28,
  },
  {
    label: "Hispanic",
    value: 67,
  },
  {
    label: "White",
    value: 131,
  },
  {
    label: "Vietnamese",
    value: 39,
  },
  {
    label: "Middle Eastern",
    value: 27,
  },
  {
    label: "Korean",
    value: 19,
  },
  {
    label: "Japanese",
    value: 15,
  },
  {
    label: "Other",
    value: 85,
  },
]

const accepted = [
  {
    label: "accepted",
    value: 622,
  },
  {
    label: "denied",
    value: 100,
  },
]

const gender = [
  {
    label: "man",
    value: 455,
  },
  {
    label: "woman",
    value: 194,
  },
  {
    label: "non-binary",
    value: 16,
  },
  {
    label: "cisgender",
    value: 29,
  },
  {
    label: "transgender",
    value: 4,
  },
  {
    label: "prefer not to answer",
    value: 34,
  },
]

const education = [
  {
    label: "undergrad university",
    value: 557,
  },
  {
    label: "2-year/CC",
    value: 38,
  },
  {
    label: "high school",
    value: 41,
  },
  {
    label: "graduate university",
    value: 36,
  },
  {
    label: "not a student",
    value: 36,
  },
  {
    label: "code school/bootcamp",
    value: 3,
  },
]

const color_set1 = ["#7DCFB6", "#EB7474", "#FFE665", "#66E4F5"]
const color_set2 = [
  "#FFBD3D",
  "#A15EF5",
  "#66E4F5",
  "#0AD6B1",
  "#EB7474",
  "#f048bb",
]

export interface HackerStatsProps {
  name: string
  stats: Array<Item>
  colors: Array<string>
}

export const DecisionStats: Array<HackerStatsProps> = [
  {
    name: "Application Decisions",
    stats: accepted,
    colors: color_set1,
  },
  {
    name: "School",
    stats: school,
    colors: color_set1,
  },
  {
    name: "Major",
    stats: major,
    colors: color_set1,
  },
]

export const DemographicStats: Array<HackerStatsProps> = [
  {
    name: "Gender",
    stats: gender,
    colors: color_set2,
  },
  {
    name: "Sexuality",
    stats: sexuality,
    colors: color_set2,
  },
  {
    name: "Education Level",
    stats: education,
    colors: color_set2,
  },
  {
    name: "Age",
    stats: age,
    colors: color_set2,
  },
  {
    name: "Identification",
    stats: identification,
    colors: color_set2,
  },
  {
    name: "Affiliation",
    stats: affiliation,
    colors: color_set2,
  },
]

export const HackerStats: Array<HackerStatsProps> = [
  {
    name: "Application Decisions",
    stats: accepted,
    colors: color_set1,
  },
  {
    name: "Gender",
    stats: gender,
    colors: color_set2,
  },
  {
    name: "Education Level",
    stats: education,
    colors: color_set2,
  },
]
