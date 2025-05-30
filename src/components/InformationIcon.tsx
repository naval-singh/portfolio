import { type FC, type ReactNode } from "react";

interface InformationIconProps {
  icon: ReactNode;
  label: string;
}

const InformationIcon: FC<InformationIconProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-60 sm:h-40 h-28">
      {icon}
      <span className="text-white text-sm max-sm:text-xs">{label}</span>
    </div>
  );
};

export default InformationIcon;
