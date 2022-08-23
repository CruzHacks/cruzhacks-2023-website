import React from "react"
import { render, screen } from "@testing-library/react"
import Team from "./index.view.tsx"

test("renders team text", () => {
  render(<Team />)
  const elem = screen.getByText(/Our Team/i)
  expect(elem).toBeInTheDocument()
})
