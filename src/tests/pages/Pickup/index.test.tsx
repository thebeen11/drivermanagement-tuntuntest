import { BrowserRouter } from "react-router-dom";
import PickUp from "../../../pages/Pickup";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("PickUp Component", () => {
  it("renders the Header component", () => {
    render(
      <BrowserRouter>
        <PickUp />
      </BrowserRouter>,
    );

    // Check if Sidebar is rendered
    expect(screen.getByText("Pickup")).toBeInTheDocument();
  });
});
