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

// Create a store for managing driver data using zustand
const useDriverStore = create<DriverStoreState>()(
  immer((set, get) => ({
    // Initial state
    sourceDriver: [], // Original list of drivers
    drivers: [], // List of drivers to display
    driver: {
      // Current driver being edited
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

    // Function to update driver properties
    setDriver: (name, value) => {
      set((state) => {
        if (name == "email") state.driver.email = value;
        if (name == "phone") state.driver.phone = value.replace(/\D/g, "");
        if (name == "first") state.driver.name.first = value;
        if (name == "date") state.driver.dob.date = value;
      });
    },

    // Function to search for drivers
    search: (srch) =>
      set((state) => ({
        drivers: state.sourceDriver.filter((driver) =>
          driver.name.first.toLowerCase().includes(srch.toLowerCase()),
        ),
      })),

    // Function to fetch drivers from the server
    fetchDrivers: async () => {
      const response = await getData();
      set({ drivers: response, sourceDriver: response });
    },

    // Function to add a new driver
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
