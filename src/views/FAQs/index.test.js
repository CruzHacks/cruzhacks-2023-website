import React from "react"
import { render, screen } from "@testing-library/react"
import FAQs from "./index.view"

test("renders FAQs text", () => {
  render(<FAQs />)
  const elem = screen.getByText(/FAQ/i)
  expect(elem).toBeInTheDocument()
})
