import React from "react"
import { render, screen } from "@testing-library/react"
import Gallery from "./index.view.tsx"

test("renders gallery text", () => {
  render(<Gallery />)
  const elem = screen.getByText(/Gallery/i)
  expect(elem).toBeInTheDocument()
})
