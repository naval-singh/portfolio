import { type FC } from "react";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className="w-full flex items-center justify-center py-4">
      <span className="text-3xl font-cardo">{title}</span>
    </div>
  );
};

export default Header;
