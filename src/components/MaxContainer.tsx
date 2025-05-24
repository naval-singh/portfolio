import type { FC } from "react";
import type React from "react";

interface MaxContainerProps {
  children: React.ReactNode;
}

const MaxContainer: FC<MaxContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-[1440px]">{children}</div>;
};

export default MaxContainer;
