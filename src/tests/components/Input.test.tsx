import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Input from "../../components/Input";

describe("Input", () => {
  it("does not render an icon when not provided", () => {
    render(<Input title="Test Input" />);
    const iconElement = screen
      .queryByTitle<HTMLElement>("Test Input")!
      .parentElement?.querySelector<HTMLInputElement>("svg");
    expect(iconElement).not.toBeInTheDocument();
  });
});
