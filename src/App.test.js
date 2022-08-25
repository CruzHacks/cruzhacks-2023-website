import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import App from "./App.tsx"

/* See: https://testing-library.com/docs/example-react-router/
 */

test("renders welcome text", () => {
  render(<App />, { wrapper: BrowserRouter })
  const elem = screen.getByText(/CruzHacks 2023/i)
  expect(elem).toBeInTheDocument()
})

test("renders Team on navbar click", () => {
  render(<App />, { wrapper: BrowserRouter })
  const elem = screen.getByText(/Team/i)
  fireEvent.click(elem)
  expect(screen.getByText(/Our Team/i)).toBeInTheDocument()
})

test("clicking Home from Team component renders appropriately", () => {
  render(<App />, { wrapper: BrowserRouter })
  // team component render persists here from prev
  const elem = screen.getByText(/Home/i)
  fireEvent.click(elem)
  expect(screen.getByText(/CruzHacks 2023/i)).toBeInTheDocument()
})

test("landing on bad route", () => {
  const badRoute = "/you/never/should/have/come/here"
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  )
  const elem = screen.getByText(/404 Not Found/i)
  expect(elem).toBeInTheDocument()
})
