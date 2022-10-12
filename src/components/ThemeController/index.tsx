import React, { useContext } from "react"
import {
  ThemeContext,
  ThemeContextType,
} from "../../contexts/ThemeContext/ThemeContext"

interface Props {
  children: React.ReactElement
}

const ThemeController: React.FC<Props> = ({ children }: Props) => {
  const context = useContext(ThemeContext) as ThemeContextType
  const [theme] = context

  return <div className={`app--${theme.mode}`}>{children}</div>
}

export default ThemeController
