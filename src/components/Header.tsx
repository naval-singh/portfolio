import { type FC } from "react";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className="w-full flex items-center justify-center py-4 max-sm:px-5">
      <span className="text-center text-3xl max-sm:text-2xl font-cardo">{title}</span>
    </div>
  );
};

export default Header;
