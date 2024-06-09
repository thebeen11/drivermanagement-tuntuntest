import { renderHook, act } from "@testing-library/react";
import usePagination from "../../hooks/usePagination";
import { describe, it, expect } from "vitest";

describe("usePagination hook", () => {
  const testData = Array.from({ length: 15 }, (_, i) => i + 1);

  it("should paginate data correctly", () => {
    const { result } = renderHook(() => usePagination(testData));

    expect(result.current.paginatedData).toEqual([1, 2, 3, 4, 5]);
    expect(result.current.isFirstPage).toBe(true);
    expect(result.current.isLastPage).toBe(false);

    act(() => {
      result.current.next();
    });

    expect(result.current.paginatedData).toEqual([6, 7, 8, 9, 10]);
    expect(result.current.isFirstPage).toBe(false);
    expect(result.current.isLastPage).toBe(false);

    act(() => {
      result.current.next(); // Go to the next page
    });

    expect(result.current.paginatedData).toEqual([11, 12, 13, 14, 15]);
    expect(result.current.isFirstPage).toBe(false);
    expect(result.current.isLastPage).toBe(true);
  });

  it("should handle previous page correctly", () => {
    const { result } = renderHook(() => usePagination(testData));

    act(() => {
      result.current.next(); // Move to the next page
    });

    expect(result.current.paginatedData).toEqual([6, 7, 8, 9, 10]);
    expect(result.current.isFirstPage).toBe(false);
    expect(result.current.isLastPage).toBe(false);

    act(() => {
      result.current.prev(); // Go back to the previous page
    });

    expect(result.current.paginatedData).toEqual([1, 2, 3, 4, 5]);
    expect(result.current.isFirstPage).toBe(true);
    expect(result.current.isLastPage).toBe(false);
  });
});
