import React from "react"
import { render, screen } from "@testing-library/react"
import About from "./index.view.tsx"

test("renders about text", () => {
  render(<About />)
  const elem = screen.getByText(/About CruzHacks/i)
  expect(elem).toBeInTheDocument()
})
