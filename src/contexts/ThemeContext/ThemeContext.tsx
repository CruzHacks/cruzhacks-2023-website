import React, { createContext, useState } from "react"

interface Theme {
  mode: "dark" | "light"
}

const initialTheme: Theme = {
  mode:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
}

export type ThemeContextType =
  | [typeof initialTheme, null]
  | [Theme, React.Dispatch<React.SetStateAction<Theme>>]

export const ThemeContext = createContext<ThemeContextType>([
  initialTheme,
  null,
])

interface Props {
  children: React.ReactElement
}

const StateProvider: React.FC<Props> = ({ children }: Props) => {
  const [theme, setTheme] = useState(initialTheme)

  // console.log("Theme is", theme)

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export default StateProvider
