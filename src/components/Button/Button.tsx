import React from "react"
import "./Button.scss"

type Modifier = "primary" | "secondary"

export interface ButtonProps {
  className?: string
  modifier?: Modifier
  label: string
  disabled?: boolean
  href?: string
  onClick?: any
  redirect?: boolean
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  className,
  label,
  disabled,
  href,
  onClick,
  modifier,
  redirect,
  children,
}: ButtonProps) => {
  const classes = [className]
  classes.push("Button")
  if (modifier) {
    classes.push(`Button--${modifier}`)
  }

  if (href && !disabled) {
    if (redirect) {
      return (
        <a href={href} className={classes.join(" ")} onClick={onClick}>
          {children}
        </a>
      )
    }
    return (
      <a
        href={href}
        className={classes.join(" ")}
        target='_blank'
        rel='noreferrer'
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type='button'
      className={classes.join(" ")}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: "",
  disabled: false,
  href: undefined,
  onClick: undefined,
  redirect: false,
  modifier: "primary",
}

export default Button
