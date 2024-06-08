import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

describe("it should test App", () => {
  it("renders Sidebar and Outlet", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    // Check if Sidebar is rendered
    expect(screen.getByTestId("navigation")).toBeDefined();

    // Check if Outlet area is rendered
    expect(screen.getByTestId("outlet")).toBeDefined();
  });
});
