import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import "@testing-library/jest-dom";
import App from "../src/App";

describe("App", () => {
  test("renders heading and hello component", () => {
    render(<App />);
    expect(screen.getByText(/React Static Site/i)).toBeInTheDocument();
    expect(screen.getByTestId("hello")).toHaveTextContent("Hello, route!");
  });
});
