import React from "react"
import { render, screen } from "@testing-library/react"
import Projects from "./index.view.tsx"

test("renders projects text", () => {
  render(<Projects />)
  const elem = screen.getByText(/Projects/i)
  expect(elem).toBeInTheDocument()
})
