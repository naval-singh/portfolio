import { type FC } from "react";
import type { InfoContainerItem } from "../types";

interface InfoContainerProps {
  dataList: InfoContainerItem[];
}

const InfoContainer: FC<InfoContainerProps> = ({ dataList }) => {
  return dataList.map((item, index, list) => {
    let isOdd = index%2 === 1
    return (
      <div key={item.id} className="relative flex flex-col items-center">
        {/* main circle */}
        <div className="w-36 h-36 bg-white rounded-full text-black text-xxs font-medium flex flex-col justify-center items-center gap-1 uppercase tracking-[2px]">
          <span>{item.end}</span>
          <span>-</span>
          <span>{item.start}</span>
        </div>
        {/* seperator */}
        {list.length - 1 !== index && (
          <div className="border-l border-borderGray h-28" />
        )}
        {/* details */}
        <div className={`absolute top-0 flex flex-col w-max max-w-[520px] ${isOdd ? 'left-52 items-start' : 'right-52 items-end'}`}>
          <span className="text-xs uppercase tracking-[2px] text-white">
            {item.company}
          </span>
          <span className={`mt-4 text-base font-medium tracking-[2px] text-mainGray ${isOdd ? 'text-left' : 'text-right'}`}>
            {item.title}
          </span>
          <span className={`mt-6 text-sm/6 ${isOdd ? 'text-left' : 'text-right'}`}>{item.desc}</span>
        </div>
      </div>
    )
  });
};

export default InfoContainer;
