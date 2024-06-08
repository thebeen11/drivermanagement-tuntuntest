import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import useDriver from "./hooks/useDriver";

const App = () => {
  useDriver();
  return (
    <div className="w-full grid grid-cols-12 h-screen">
      <div className="col-span-2 " data-testid="navigation">
        <Sidebar />
      </div>
      <div
        className="col-span-10 bg-[#FAF9F9] overflow-y-scroll px-6 py-10"
        data-testid="outlet"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default App;
