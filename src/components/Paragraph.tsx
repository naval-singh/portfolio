import { type FC } from "react";

interface ParagraphProps {
  desc: string;
}

const Paragraph: FC<ParagraphProps> = ({ desc }) => {
  return (
    <p className="w-full mx-auto text-center sm:text-base text-sm text-mainGray">{desc}</p>
  );
};

export default Paragraph;
