import Header from "../components/Header";
import HeaderCap from "../components/HeaderCap";

const Resume = () => {
  return (
    <div className="w-full bg-baseGray pb-12 pt-32">
      {/* headings */}
      <HeaderCap title="resume" />
      <Header title="People I've Worked With" />
    </div>
  );
};

export default Resume;
