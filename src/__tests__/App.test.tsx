import React from "react"
import { render, screen } from "@testing-library/react"
import App from "../App"

test("renders welcome text", () => {
  render(<App />)
  const elem = screen.getByText(/Welcome CruzHacks 2023 Engineers!/i)
  expect(elem).toBeInTheDocument()
})
