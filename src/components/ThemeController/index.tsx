import React from "react"
import { useTheme } from "../../contexts/ThemeContext/ThemeContext"

interface Props {
  children: React.ReactElement
}

const ThemeController: React.FC<Props> = ({ children }: Props) => {
  const { theme } = useTheme()

  return <div className={`app--${theme.mode}`}>{children}</div>
}

export default ThemeController
