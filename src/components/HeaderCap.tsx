import type { FC } from "react";

interface HeaderCapProps {
  title: string;
}

const HeaderCap: FC<HeaderCapProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-xs max-sm:text-xxs uppercase tracking-widest font-medium">
        {title}
      </span>
      <span className="border-b w-6 mt-4 border-borderGray" />
    </div>
  );
};

export default HeaderCap;
