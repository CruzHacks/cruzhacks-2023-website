import React from "react"
import { render, screen } from "@testing-library/react"
import Quotes from "./index.view.tsx"

test("renders quotes text", () => {
  render(<Quotes />)
  const elem = screen.getByText(/Quotes/i)
  expect(elem).toBeInTheDocument()
})
