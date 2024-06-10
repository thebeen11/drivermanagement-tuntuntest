import { NavLink } from "react-router-dom";
import { menu } from "../router/menu";

// Functional component to display a sidebar navigation
const Sidebar = () => {
  return (
    <div className=" w-full h-full flex flex-col gap-3 px-6 py-10">
      {menu.map((item) => (
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-primary font-semibold" : ""}  flex gap-3 items-center`
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
