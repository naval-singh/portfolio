import { useState } from "react";
import Header from "../components/Header";
import HeaderCap from "../components/HeaderCap";
import Tabs from "../components/Tabs";
import type { InfoContainerItem, TabItem } from "../types";

const experiences: InfoContainerItem[] = [
  {
    id: 1,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 2,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 3,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 4,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
];

const education: InfoContainerItem[] = [
  {
    id: 1,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "PG Diploma in Advanced Computing",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 2,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 3,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
  {
    id: 4,
    start: "Jan 2014",
    end: "Mar 2015",
    title: "Full Stack Developer",
    company: "Uraan SoftSkills Pvt. Ltd.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.",
  },
];

const Resume = () => {
  const tabs: TabItem[] = [
    { id: 1, title: "Experience", list: experiences },
    { id: 2, title: "Education", list: education },
  ];

  const [activeTab, setActiveTab] = useState<TabItem>(tabs[0]);
  return (
    <div className="w-full bg-bgGray pb-12 pt-32">
      {/* headings */}
      <HeaderCap title="resume" />
      <Header title="People I've Worked With" />

      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />


    </div>
  );
};

export default Resume;
