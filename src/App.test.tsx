import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"

test("renders Yo", () => {
  render(<App />)
  const linkElement = screen.getByText(/Yo/i)
  expect(linkElement).toBeInTheDocument()
})
