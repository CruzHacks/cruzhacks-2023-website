import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import App from "./App.tsx"

/* See: https://testing-library.com/docs/example-react-router/
 */

test("renders welcome text", () => {
  render(<App />, { wrapper: BrowserRouter })
  const elem = screen.getByText(/Welcome CruzHacks 2023 Engineers!/i)
  expect(elem).toBeInTheDocument()
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
