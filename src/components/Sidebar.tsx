import { NavLink } from "react-router-dom";
import { menu } from "../router/menu";

const Sidebar = () => {
  return (
    <div className=" w-full h-full flex flex-col gap-3">
      {menu.map((item) => (
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-red-400" : ""}  flex gap-3`
          }
          key={item.path}
          to={item.path}
        >
          <item.icon />
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
