import { useState } from "react";
import { IconType } from "react-icons";

interface InputProps {
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: IconType;
}

const Input = ({
  type,
  value = "",
  placeholder = "",
  onChange,
  Icon,
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <div className=" flex gap-2 items-center border border-title px-2 py-3 rounded-sm">
      {Icon ? <Icon className=" text-primary" /> : ""}
      <input
        className=" border-none outline-none font-light"
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
