import { type FC, type ReactNode } from "react";

interface InformationIconProps {
  icon: ReactNode;
  label: string;
}

const InformationIcon: FC<InformationIconProps> = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-60 h-40">
      {icon}
      <span className="text-white text-sm">{label}</span>
    </div>
  );
};

export default InformationIcon;
