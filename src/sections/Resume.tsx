import { useState } from "react";
import Tabs from "../components/Tabs";
import { Element } from "react-scroll";
import type { TabItem } from "../types";
import Header from "../components/Header";
import HeaderCap from "../components/HeaderCap";
import { education, experiences } from "../data";
import MaxContainer from "../components/MaxContainer";

const tabs: TabItem[] = [
  { id: 1, title: "Experience", list: experiences },
  { id: 2, title: "Education", list: education },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState<TabItem>(tabs[0]);
  return (
    <Element name="resume">
      <MaxContainer>
        <section className="pb-12 pt-32">
          {/* headings */}
          <HeaderCap title="resume" />
          <Header
            title={
              activeTab.title === "Experience"
                ? "People I've Worked With"
                : "My Education"
            }
          />
          {/* tabs */}
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>
      </MaxContainer>
    </Element>
  );
};

export default Resume;
