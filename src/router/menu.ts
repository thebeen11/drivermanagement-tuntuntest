import { HiUserCircle } from "react-icons/hi";
import { Menu } from "../interface/menu";
import { IoMdHome } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

export const menu: Menu[] = [
  { label: "Beranda", path: "/", icon: IoMdHome },
  {
    label: "Driver Management",
    path: "/driver-management",
    icon: HiUserCircle,
  },
  {
    label: "Pickup",
    path: "/pickup",
    icon: MdDateRange,
  },
];
