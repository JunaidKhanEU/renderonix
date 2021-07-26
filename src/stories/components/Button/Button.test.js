import { render, screen } from "@testing-library/react"

import { Button } from "./Button"

it("should show login form", () => {
  render(<Button label="test" />)
  expect(screen.getByRole("button")).toHaveTextContent("test")
})
