import { ReactNode } from "react";

interface HeaderProps {
  title: string;
  subTitle: string;
  children?: ReactNode;
}
const Header = ({ title, subTitle, children }: HeaderProps) => {
  return (
    <div className=" w-full bg-white flex justify-between">
      <div>
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Header;
