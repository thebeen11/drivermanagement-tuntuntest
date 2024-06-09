// Driver.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Driver from "../../../pages/Driver";
import { MOCK_DRIVERS } from "../../../constants";
import * as usePaginationModule from "../../../hooks/usePagination";

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
// Mock the custom hooks
vi.mock("../../../hooks/usePagination", () => ({
  __esModule: true,
  default: () => ({
    paginatedData: MOCK_DRIVERS,
    isFirstPage: true,
    isLastPage: false,
    next: vi.fn(),
    prev: vi.fn(),
  }),
}));

describe("Driver Component", () => {
  it("renders search input and add driver button", () => {
    render(
      <BrowserRouter>
        <Driver />
      </BrowserRouter>,
    );

    const searchInput = screen.getByPlaceholderText("Cari Driver");
    const addButton = screen.getByText(/Tambah Driver/i);

    expect(searchInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("calls search function on input change", () => {
    render(
      <BrowserRouter>
        <Driver />
      </BrowserRouter>,
    );

    const searchInput = screen.getByPlaceholderText("Cari Driver");
    fireEvent.change(searchInput, { target: { value: "Leo" } });

    expect(screen.getByText(/Leonardo/)).toBeInTheDocument();
  });

  it("renders 'Data Not Found' when no drivers available", () => {
    vi.spyOn(usePaginationModule, "default").mockReturnValue({
      paginatedData: [],
      isFirstPage: true,
      isLastPage: false,
      next: vi.fn(),
      prev: vi.fn(),
    });

    render(
      <BrowserRouter>
        <Driver />
      </BrowserRouter>,
    );

    const dataNotFound = screen.getByText(/Data Not Found/i);
    expect(dataNotFound).toBeInTheDocument();
  });
});
