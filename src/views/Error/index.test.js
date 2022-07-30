import React from "react"
import { render, screen } from "@testing-library/react"
import ErrorView from "./index.view.tsx"

test("renders welcome text", () => {
  render(<ErrorView />)
  const elem = screen.getByText(/404 Not Found/i)
  expect(elem).toBeInTheDocument()
})
