import type { FC } from "react";

interface TechImageProps {
  src: string;
  alt: string;
}

const TechImage: FC<TechImageProps> = ({ src, alt }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="hover:scale-125 p-2 w-20 h-20 mx-16 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <span className="uppercase text-xxs tracking-[2px] font-medium text-mainGray">
        {alt}
      </span>
    </div>
  );
};

export default TechImage;
