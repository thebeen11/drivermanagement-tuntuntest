import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import AddDriver from "../../../pages/Driver/Form";
import { MOCK_DRIVERS } from "../../../constants";

// Mock Zustand store
vi.mock("../../store/useDriverStore", () => {
  return {
    __esModule: true,
    default: vi.fn(() => ({
      sourceDriver: MOCK_DRIVERS,
      drivers: MOCK_DRIVERS,
      driver: MOCK_DRIVERS[0],
      setDriver: vi.fn(),
      search: vi.fn(),
      fetchDrivers: vi.fn().mockReturnValueOnce(MOCK_DRIVERS),
      addDriver: vi.fn(),
    })),
  };
});

describe("AddDriver Component", () => {
  it("renders inputs and buttons", () => {
    render(
      <Router>
        <AddDriver />
      </Router>,
    );

    // Ensure all input fields and buttons are rendered
    const nameInput = screen.getByPlaceholderText("Nama Driver");
    const emailInput = screen.getByPlaceholderText("Email");
    const phoneInput = screen.getByPlaceholderText("Telepon");
    const dateInput = screen.getByPlaceholderText("Tanggal Lahir");
    const addButton = screen.getByText("Tambah Data");
    const cancelButton = screen.getByText("Batal");

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it("handles input change", () => {
    render(
      <Router>
        <AddDriver />
      </Router>,
    );

    // Simulate input change
    const nameInput =
      screen.getByPlaceholderText<HTMLInputElement>("Nama Driver");
    fireEvent.change(nameInput, { target: { value: "Leonardo" } });

    // Check if setDriver is called with correct value
    expect(nameInput.value).toBe("Leonardo");
  });

  it("submits form and navigates on success", () => {
    vi.spyOn(window, "alert").mockImplementationOnce(() => {});
    render(
      <Router>
        <AddDriver />
      </Router>,
    );

    // Simulate form submission
    fireEvent.submit(screen.getByRole("button"));

    // Check if alert is displayed
    expect(window.alert).toBeCalled();

    // Check if navigation occurs
    expect(window.location.pathname).toBe("/driver-management");
  });
});
