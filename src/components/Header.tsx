import { ReactNode } from "react";

// Define the properties for the Header component
interface HeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

// Functional component to display a header
const Header = ({ title, description, children }: HeaderProps) => {
  return (
    <div className=" w-full bg-white flex flex-col lg:flex-row lg:justify-between justify-start p-5 gap-2 lg:items-center items-start">
      <div>
        <h1 className=" text-2xl font-bold text-primary">{title}</h1>
        <p>{description}</p>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Header;
