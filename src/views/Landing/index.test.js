import React from "react"
import { render, screen } from "@testing-library/react"
import Landing from "./index.view.tsx"

test("renders welcome text", () => {
  render(<Landing />)
  const elem = screen.getByText(/Welcome CruzHacks 2023 Engineers!/i)
  expect(elem).toBeInTheDocument()
})
