import { create } from "zustand";
import { DriverInterface } from "../interface/driver";

interface StoreState {
  sourceDriver: DriverInterface[];
  drivers: DriverInterface[];
  search: (srch: string) => void;
  setDriverData: (newDriver: DriverInterface[]) => void;
}

const useStore = create<StoreState>()((set) => ({
  sourceDriver: [],
  drivers: [],
  search: (srch) =>
    set((state) => ({
      drivers: state.sourceDriver.filter((driver) =>
        driver.name.first.toLowerCase().includes(srch.toLowerCase()),
      ),
    })),
  setDriverData: (newDriver) =>
    set({ sourceDriver: newDriver, drivers: newDriver }),
}));

export default useStore;
