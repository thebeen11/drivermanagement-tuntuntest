import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import useDriverStore from "./store/useDriverStore";
import { useEffect } from "react";

const App = () => {
  const { fetchDrivers } = useDriverStore();

  useEffect(() => {
    const getInitalDriverData = async () => {
      await fetchDrivers();
    };
    getInitalDriverData();
  }, [fetchDrivers]);

  return (
    <div className="w-full grid grid-cols-12 h-screen">
      <div className="col-span-2 hidden lg:block" data-testid="navigation">
        <Sidebar />
      </div>
      <div
        className="lg:col-span-10 col-span-12 bg-[#FAF9F9] overflow-y-scroll px-6 py-10"
        data-testid="outlet"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default App;
