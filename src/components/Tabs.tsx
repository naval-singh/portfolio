import { type FC } from "react";
import type { TabItem } from "../types";
import InfoContainer from "./InfoContainer";

interface TabsProps {
  tabs: TabItem[];
  activeTab: TabItem;
  setActiveTab: (tab: TabItem) => void;
}

const Tabs: FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <>
      <div className="mx-auto w-fit my-10 flex items-center">
        {tabs.map((tab) => (
          <span
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`
            cursor-pointer transition-all duration-200 text-base tracking-[1px] border-b-2
            pb-3 px-3 border-bgGray hover:text-white hover:border-mainGray
            ${activeTab.title === tab.title ? "text-white" : "text-mainGray"}
          `}
          >
            {tab.title}
          </span>
        ))}
      </div>
      <div className="w-full py-5 flex flex-col items-center mb-14">
        <InfoContainer dataList={activeTab.list} />
      </div>
    </>
  );
};

export default Tabs;
