import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { menu } from "../router/menu";
import { Menu } from "../interface/menu";

interface HeaderProps {
  children?: ReactNode;
}
const Header = ({ children }: HeaderProps) => {
  const [activeMenu, setActiveMenu] = useState<Menu>();
  const location = useLocation();
  useEffect(() => {
    const active = menu.find((item) => item.path == location.pathname);
    setActiveMenu(active);
  }, [location]);

  return (
    <div className=" w-full bg-white flex justify-between p-5 items-center">
      <div>
        <h1 className=" text-2xl font-bold text-primary">
          {activeMenu?.label}
        </h1>
        <p>{activeMenu?.description}</p>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Header;
