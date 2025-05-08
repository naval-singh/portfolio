import { type FC } from "react";

interface ButtonProps {
  label: string;
  marginTop?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button: FC<ButtonProps> = ({
  label,
  marginTop,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-white active:bg-black active:border border-borderGray w-full h-12 transition-colors duration-200 ${marginTop}`}
    >
      <span className="uppercase text-xs text-borderGray tracking-[2px]">
        {label}
      </span>
    </button>
  );
};

export default Button;
