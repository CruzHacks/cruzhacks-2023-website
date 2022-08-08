import React from "react"
import { render, screen } from "@testing-library/react"
import Stats from "./index.view.tsx"

test("renders stats text", () => {
  render(<Stats />)
  const elem = screen.getByText(/Milestones of 2022/i)
  expect(elem).toBeInTheDocument()
})
