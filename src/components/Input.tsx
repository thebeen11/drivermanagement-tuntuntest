import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

// Define the properties for the Input component
interface Input extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: IconType; // Optional Icon property of type IconType from react-icons
}

const Input = ({ Icon, ...rest }: Input) => {
  return (
    <div>
      <label>{rest.title}</label>
      <div className=" flex gap-2 items-center border border-title px-2 py-3 rounded-sm">
        {Icon ? <Icon className=" text-primary" /> : ""}
        {/* Render Icon if provided */}
        <input
          className=" border-none focus:border-none focus:outline-none w-full outline-none font-light"
          {...rest} // Spread rest of the input attributes
        />
      </div>
    </div>
  );
};

export default Input;
