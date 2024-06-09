import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: IconType;
}

const Input = ({ Icon, ...rest }: Input) => {
  return (
    <div>
      <label>{rest.title}</label>
      <div className=" flex gap-2 items-center border border-title px-2 py-3 rounded-sm">
        {Icon ? <Icon className=" text-primary" /> : ""}
        <input
          className=" border-none w-full outline-none font-light"
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
