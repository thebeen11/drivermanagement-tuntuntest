import { getDrivers } from "../../../service/api/driver";
import { describe, it, expect, vi } from "vitest";
import { axiosInstance } from "../../../service/instance";
import { MOCK_DRIVERS } from "../../../constants";

describe("getDrivers function", () => {
  it("fetches drivers data correctly", async () => {
    // Mocking axios
    vi.spyOn(axiosInstance, "get").mockResolvedValue({
      data: MOCK_DRIVERS,
    });
    await getDrivers(3);
    expect(axiosInstance.get).toHaveBeenCalledOnce();
  });
});
