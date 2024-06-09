import { create } from "zustand";
import { DriverInterface } from "../interface/driver";
import { getData } from "../utils";

interface DriverStoreState {
  sourceDriver: DriverInterface[];
  drivers: DriverInterface[];
  search: (srch: string) => void;
  setDriverData: (newDriver: DriverInterface[]) => void;
  fetchDrivers: () => Promise<void>;
}

const useDriverStore = create<DriverStoreState>()((set) => ({
  sourceDriver: [],
  drivers: [],
  search: (srch) =>
    set((state) => ({
      drivers: state.sourceDriver.filter((driver) =>
        driver.name.first.toLowerCase().includes(srch.toLowerCase()),
      ),
    })),
  fetchDrivers: async () => {
    const response = await getData();
    set({ drivers: response, sourceDriver: response });
  },
  setDriverData: (newDriver) =>
    set({ sourceDriver: newDriver, drivers: newDriver }),
}));

export default useDriverStore;
