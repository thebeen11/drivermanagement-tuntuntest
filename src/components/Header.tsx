import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { menu } from "../router/menu";
import { Menu } from "../interface/menu";

interface HeaderProps {
  children?: ReactNode;
  isDescription?: boolean;
}
const Header = ({ children, isDescription = true }: HeaderProps) => {
  const [activeMenu, setActiveMenu] = useState<Menu>();
  const location = useLocation();
  useEffect(() => {
    const pattern = /^\/([^/]+)/;

    const match = location.pathname.match(pattern);
    let firstPathSegmentWithSlash = "";
    if (match) {
      firstPathSegmentWithSlash = match[0];
    }
    const active = menu.find((item) => item.path == firstPathSegmentWithSlash);
    setActiveMenu(active);
  }, [location]);

  return (
    <div className=" w-full bg-white flex flex-col lg:flex-row lg:justify-between justify-start p-5 gap-2 lg:items-center items-start">
      <div>
        <h1 className=" text-2xl font-bold text-primary">
          {activeMenu?.label}
        </h1>
        {isDescription ? <p>{activeMenu?.description}</p> : ""}
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Header;
