import React, { useEffect, useState } from "react"
import Button, { ButtonProps } from "./Button"

interface CoolDownButtonProps extends ButtonProps {
  duration: number
}

const CoolDownButton: React.FC<CoolDownButtonProps> = ({
  duration,
  label,
  disabled: disabledProp,
  onClick,
  children,
  ...rest
}: CoolDownButtonProps) => {
  let storageKey: string | undefined = `${label}_btn`

  try {
    const testKey = "_test_key_"
    sessionStorage.setItem(testKey, testKey)
    sessionStorage.removeItem(testKey)
  } catch (e) {
    storageKey = undefined
  }

  // check sessionStorage to see if the cool down has passed
  let ttl = 0
  if (storageKey) {
    const expiration = sessionStorage.getItem(storageKey)
    if (expiration) {
      ttl = Number.parseInt(expiration, 10) - Date.now()
    }
    if (ttl < 0) {
      sessionStorage.removeItem(storageKey)
    }
  }

  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    setDisabled(disabledProp || ttl > 0)

    if (ttl > 0) {
      // re-enable the button after a set amount of time
      const timeout = setTimeout(() => {
        setDisabled(false)
        if (storageKey) sessionStorage.removeItem(storageKey)
      }, ttl)

      return () => clearTimeout(timeout)
    }

    return () => {}
  }, [disabled, disabledProp])

  const handleOnClick = () => {
    onClick()

    setDisabled(true)
    if (storageKey) {
      sessionStorage.setItem(storageKey, `${Date.now() + duration}`)
    }
  }

  return (
    <Button
      className={rest.className}
      label={label}
      disabled={disabled}
      href={rest.href}
      onClick={handleOnClick}
    >
      {children}
    </Button>
  )
}

export default CoolDownButton
