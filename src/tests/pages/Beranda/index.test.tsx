import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Beranda from "../../../pages/Beranda";

describe("Beranda Component", () => {
  it("renders the Header component", () => {
    render(
      <BrowserRouter>
        <Beranda />
      </BrowserRouter>,
    );

    // Check if Sidebar is rendered
    expect(screen.getByText("Beranda")).toBeInTheDocument();
  });
});
