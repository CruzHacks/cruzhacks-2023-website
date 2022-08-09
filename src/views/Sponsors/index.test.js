import React from "react"
import { render, screen } from "@testing-library/react"
import Sponsors from "./index.view.tsx"

test("renders sponsors text", () => {
  render(<Sponsors />)
  const elem = screen.getByText(/Sponsors/i)
  expect(elem).toBeInTheDocument()
})
