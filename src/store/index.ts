import { create } from "zustand";
import { DriverInterface } from "../interface/driver";
import { addData, getData } from "../utils";
import { immer } from "zustand/middleware/immer";

interface DriverStoreState {
  sourceDriver: DriverInterface[];
  drivers: DriverInterface[];
  driver: DriverInterface;
  setDriver: (name: string, value: string) => void;
  search: (srch: string) => void;
  fetchDrivers: () => Promise<void>;
  addDriver: () => Promise<void>;
}

const useDriverStore = create<DriverStoreState>()(
  immer((set, get) => ({
    sourceDriver: [],
    drivers: [],
    driver: {
      name: {
        first: "",
        title: "",
        last: "",
      },
      email: "",
      phone: "",
      dob: {
        date: "",
      },
    } as DriverInterface,
    setDriver: (name, value) => {
      set((state) => {
        if (name == "email") state.driver.email = value;
        if (name == "phone") state.driver.phone = value.replace(/\D/g, "");
        if (name == "first") state.driver.name.first = value;
        if (name == "date") state.driver.dob.date = value;
      });
    },
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
    addDriver: async () => {
      const payload = { ...get().drivers[0] };
      const driver = get().driver;

      if (payload && driver) {
        payload.phone = driver.phone;
        payload.name = driver.name;
        payload.dob = driver.dob;
        payload.email = driver.email;
        (payload.cell = String(Date.now())),
          (payload.id = {
            name: String(Date.now()),
            value: String(Date.now()),
          });
      }
      const response = await addData(payload);
      set({ drivers: response, sourceDriver: response });
    },
  })),
);

export default useDriverStore;
