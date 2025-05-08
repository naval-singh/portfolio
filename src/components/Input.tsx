import { type FC } from "react";

interface InputProps {
  placeholder?: string;
  type?: "text" | "email" | "textbox";
}

const Input: FC<InputProps> = ({ type = "text", placeholder }) => {
  const commonClasses = `w-full bg-transparent outline-none py-3 px-4 border-b border-white text-xxs tracking-[2px] text-mainGray placeholder:text-mainGray focus:border-borderGray transition-colors duration-200`;
  if (type === "textbox") {
    return (
      <textarea
        placeholder={placeholder}
        rows={5}
        cols={30}
        className={`${commonClasses} resize-none`}
      />
    );
  } else {
    return (
      <input type={type} placeholder={placeholder} className={commonClasses} />
    );
  }
};

export default Input;
