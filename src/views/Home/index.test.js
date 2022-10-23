import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "./index.view.tsx"

test("renders welcome text", () => {
  render(<Home />)
  const elem = screen.getByText(/CruzHacks 2023/i)
  expect(elem).toBeInTheDocument()
})

test("renders about text", () => {
  render(<Home />)
  const elem = screen.getByText(/About CruzHacks/i)
  expect(elem).toBeInTheDocument()
})

test("renders tracks text", () => {
  render(<Home />)
  const elem = screen.getByText(/Prize Tracks/i)
  expect(elem).toBeInTheDocument()
})

test("renders stats text", () => {
  render(<Home />)
  const elem = screen.getByText(/Milestones of 2022/i)
  expect(elem).toBeInTheDocument()
})

test("renders FAQs text", () => {
  render(<Home />)
  const elem = screen.getByText(/Q&A/i)
  expect(elem).toBeInTheDocument()
})

test("renders gallery text", () => {
  render(<Home />)
  const elem = screen.getByText(/Gallery/i)
  expect(elem).toBeInTheDocument()
})

test("renders projects text", () => {
  render(<Home />)
  const elem = screen.getByText(/Projects/i)
  expect(elem).toBeInTheDocument()
})

test("renders quotes text", () => {
  render(<Home />)
  const elem = screen.getByText(/Quotes/i)
  expect(elem).toBeInTheDocument()
})

test("renders sponsors text", () => {
  render(<Home />)
  const elem = screen.getByText(/Sponsors/i)
  expect(elem).toBeInTheDocument()
})
