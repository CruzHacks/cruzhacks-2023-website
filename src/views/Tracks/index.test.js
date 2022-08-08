import React from "react"
import { render, screen } from "@testing-library/react"
import Tracks from "./index.view.tsx"

test("renders tracks text", () => {
  render(<Tracks />)
  const elem = screen.getByText(/Prize Tracks/i)
  expect(elem).toBeInTheDocument()
})
