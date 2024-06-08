import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import useDriver from "./hooks/useDriver";

const App = () => {
  useDriver();
  return (
    <div className="w-full grid grid-cols-12 h-screen">
      <div className="col-span-2 ">
        <Sidebar />
      </div>
      <div className="col-span-10 bg-slate-400 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
