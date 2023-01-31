import React, {
  createContext,
  createRef,
  Dispatch,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import "./PortalBanner.scss"

export type Message = {
  message: string
  messageType: "ERROR" | "SUCCESS" | ""
}

interface BannerContextType {
  setBanner: Dispatch<Message>
}

export const BannerContext = createContext<BannerContextType>({
  setBanner: () => {},
})

export const BannerProvider = (props: { children: any }) => {
  const [message, setMessage] = useState<Message>({
    message: "",
    messageType: "",
  })

  const [scrollText, setScrollText] = useState<boolean>(true)
  const [, setWidth] = useState(window.innerWidth)
  const [visible, setVisible] = useState<boolean>(false)
  const clearTimerRef: any = useRef()

  useEffect(() => {
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    clearTimeout(clearTimerRef.current)
    setVisible(true)
    clearTimerRef.current = setTimeout(() => {
      setVisible(false)
    }, 4700)
  }, [message])

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  const ref = createRef<HTMLDivElement>()
  const onRefChange = useCallback((ref: any) => {
    if (ref && ref.clientWidth < ref.scrollWidth) {
      setScrollText(true)
    } else {
      setScrollText(false)
    }
  }, [])

  useEffect(() => onRefChange(ref.current), [ref])

  return (
    <BannerContext.Provider value={{ setBanner: setMessage }}>
      {visible ? (
        <div ref={ref} className={`message--${message.messageType}`}>
          <div
            className={`message--${message.messageType}--text ${
              scrollText ? "scroll" : "no-scroll"
            }`}
          >
            {message.message}
          </div>
        </div>
      ) : null}
      {props.children}
    </BannerContext.Provider>
  )
}

export const useBanner = () => useContext(BannerContext)
