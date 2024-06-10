import { MOCK_DRIVERS } from "../../constants";
import { DriverInterface } from "../../interface/driver";
import { addData, formatDate, getData } from "../../utils";
import { describe, it, expect, vi } from "vitest";

vi.mock("../../service/api/driver", () => ({
  getDrivers: vi.fn().mockReturnValueOnce(MOCK_DRIVERS),
}));

vi.mock("../../utils", () => ({
  formatDate: vi.fn().mockReturnValueOnce("09-06-2024"),
}));

vi.mock("../../utils", async (importOriginal) => {
  const mod = await importOriginal<typeof import("../../utils")>();
  return {
    ...mod,
    formatDate: vi.fn().mockReturnValueOnce("09-06-2024"),
  };
});

const getItemSpy = vi.spyOn(Storage.prototype, "getItem");

describe("formatDate function", () => {
  it("should format date correctly", () => {
    const formattedDate = formatDate("2024-06-09");
    expect(formattedDate).toBe("09-06-2024");
  });
});

describe("getData function", async () => {
  it("should fetch and store drivers if not present in localStorage", async () => {
    getItemSpy.mockReturnValueOnce(null);

    const getDataMock = vi.fn(getData);

    const result = await getDataMock();

    expect(result).toEqual(MOCK_DRIVERS);
  });

  it("should return drivers from localStorage if present", async () => {
    getItemSpy.mockReturnValueOnce(JSON.stringify(MOCK_DRIVERS));

    const getDataMock = vi.fn(getData);

    const result = await getDataMock();

    expect(result).toEqual(MOCK_DRIVERS);
  });

  it("should return drivers from localStorage if present", async () => {
    getItemSpy.mockReturnValueOnce(JSON.stringify(MOCK_DRIVERS));

    const getDataMock = vi.fn(getData);

    const result = await getDataMock();

    expect(result).toEqual(MOCK_DRIVERS);
  });

  it("should return [] json parse error", async () => {
    getItemSpy.mockReturnValueOnce("corrupted data");

    const getDataMock = vi.fn(getData);

    const result = await getDataMock();
    expect(result).toEqual([]);
  });
});

describe("addData function", async () => {
  it("should return an empty array if there are no drivers in localStorage", async () => {
    getItemSpy.mockReturnValueOnce(null);

    const newDriver: DriverInterface = MOCK_DRIVERS[0];

    const getDataMock = vi.fn(addData);

    const result = await getDataMock(newDriver);

    expect(result).toEqual([]);
  });

  it("should add a new driver to the beginning of the driver list", async () => {
    getItemSpy.mockReturnValueOnce(JSON.stringify(MOCK_DRIVERS));
    const newDriver: DriverInterface = MOCK_DRIVERS[0];

    const getDataMock = vi.fn(addData);

    const result = await getDataMock(newDriver);

    const expectedDrivers = [newDriver, ...MOCK_DRIVERS];

    expect(result).toEqual(expectedDrivers);
  });

  it("should return an empty array if localStorage data is corrupted", async () => {
    getItemSpy.mockReturnValueOnce("corrupted data");

    const getDataMock = vi.fn(addData);
    const newDriver: DriverInterface = MOCK_DRIVERS[0];

    const result = await getDataMock(newDriver);

    expect(result).toEqual([]);
  });
});
