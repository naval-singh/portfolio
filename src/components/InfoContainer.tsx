import { type FC } from "react";
import type { InfoContainerItem } from "../types";

interface InfoContainerProps {
  dataList: InfoContainerItem[];
}

const InfoContainer: FC<InfoContainerProps> = ({ dataList }) => {
  return dataList.map((item, index, list) => {
    let isOdd = index%2 === 1
    return (
      <div key={item.id} className="relative flex flex-col sm:items-center items-start max-sm:w-full max-sm:px-5">
        {/* main circle */}
        <div className="sm:w-36 w-20 sm:h-36 h-20 bg-white rounded-full text-black sm:text-xxs text-[9px] font-medium flex flex-col justify-center items-center sm:gap-1 uppercase sm:tracking-[2px] tracking-[1px]">
          <span>{item.end}</span>
          <span>-</span>
          <span>{item.start}</span>
        </div>
        {/* seperator */}
        {list.length - 1 !== index && (
          <div className="border-l border-borderGray h-28 max-sm:h-36 max-sm:ml-10" />
        )}
        {/* details */}
        <div className={`absolute sm:top-0 top-1 max-sm:pr-5 flex flex-col sm:w-max sm:max-w-[520px] ${isOdd ? 'left-52 max-sm:left-32 items-start' : 'sm:right-52 max-sm:left-32 items-end max-sm:items-start'}`}>
          <span className="text-xs max-sm:text-xxs uppercase tracking-[2px] text-white">
            {item.company}
          </span>
          <span className={`mt-4 max-sm:mt-2 text-base max-sm:text-xxs font-medium tracking-[2px] text-mainGray`}>
            {item.title}
          </span>
          <span className={`mt-6 max-sm:mt-4 sm:text-sm/6 text-xs ${isOdd ? 'text-left' : 'text-right max-sm:text-left'}`}>{item.desc}</span>
        </div>
      </div>
    )
  });
};

export default InfoContainer;
