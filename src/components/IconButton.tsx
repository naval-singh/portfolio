import type { FC, ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({ icon, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="text-mainGray hover:text-white transition-colors duration-150"
    >
      {icon}
    </button>
  );
};

export default IconButton;
