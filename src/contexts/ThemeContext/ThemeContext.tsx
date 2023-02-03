import React, { createContext, useState, useEffect, useContext } from "react"
import { getUserTheme, updateUserTheme } from "../../utils/api"
import { useAuth0 } from "@auth0/auth0-react"

interface Theme {
  mode: "dark" | "light" | "portal"
}

const initialTheme: Theme = {
  mode:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
}

/* export type ThemeContextType =
  | [
      theme: typeof initialTheme,
      toggleTheme: () => void,
      forceTheme: (arg0: "dark" | "light") => void,
      revertTheme: () => void
    ]
  | [
      theme: Theme,
      toggleTheme: () => void,
      forceTheme: (arg0: "dark" | "light") => void,
      revertTheme: () => void
    ]
*/
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  forceTheme: () => void
  revertTheme: () => void
}
export const ThemeContext = createContext<ThemeContextType>({
  theme: initialTheme,
  toggleTheme: () => {},
  forceTheme: () => {},
  revertTheme: () => {},
})
export const useTheme = () => useContext(ThemeContext)

interface Props {
  children: React.ReactElement
}

export const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const [theme, setTheme] = useState(initialTheme)
  const [revert, setRevert] = useState(initialTheme)
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const validThemes = /light|dark/
  // console.log("Theme is", theme)
  useEffect(() => {
    /**
     *  if the user is signed in
     *  we want to fetch their metadata
     *  to get the theme they last selected
     *  and update the context state to match
     *
     *  DEPENDENT on isAuthenticated to reduce fetch on re-render
     */
    if (isAuthenticated) {
      getAccessTokenSilently().then(accessToken => {
        getUserTheme(accessToken)
          .then(res => {
            if (res.status === 200) {
              if (
                res.data.theme &&
                res.data.theme.match(validThemes) &&
                res.data.theme !== theme
              ) {
                setTheme({ mode: res.data.theme })
              } else throw "invalid theme"
            } else throw "unable to fetch requested resource"
          })
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .catch(e => {})
      })
    }
  }, [isAuthenticated])

  const toggleTheme = () => {
    const newTheme: Theme = {
      mode: theme.mode === "dark" ? "light" : "dark",
    }
    setTheme(newTheme)
    if (isAuthenticated) {
      getAccessTokenSilently().then(accessToken => {
        updateUserTheme(newTheme.mode, accessToken)
      })
    }
  }

  const forceTheme = () => {
    // force a theme for a certain view with intent to revert to user-specified
    setRevert(theme)
    setTheme({ mode: "portal" })
  }

  const revertTheme = () => {
    // revert from a forced theme
    setTheme(revert)
  }

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, forceTheme, revertTheme }}
    >
      <div className={`app--${theme.mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
