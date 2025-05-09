import { type FC } from "react";

interface ParagraphProps {
  desc: string;
}

const Paragraph: FC<ParagraphProps> = ({ desc }) => {
  return (
    <p className="w-full mx-auto text-center text-base text-mainGray">{desc}</p>
  );
};

export default Paragraph;
