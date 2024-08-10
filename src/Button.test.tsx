import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Button from "./components/Button";

describe("Button Component", () => {
  test("renders the button with the correct label", () => {
    render(<Button label="Click Me" onClick={() => {}} />);

    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("disables the button when disabled prop is true", () => {
    render(<Button label="Click Me" onClick={() => {}} disabled={true} />);

    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeDisabled();
  });

  test("button is not disabled by default", () => {
    render(<Button label="Click Me" onClick={() => {}} />);

    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).not.toBeDisabled();
  });
});
