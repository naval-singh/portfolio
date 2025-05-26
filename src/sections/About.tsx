import { Element } from "react-scroll";
import Header from "../components/Header";
import HeaderCap from "../components/HeaderCap";
import Paragraph from "../components/Paragraph";
import { aboutDesc, technologies } from "../data";
import MaxContainer from "../components/MaxContainer";
import TechProgress from "../components/TechProgress";

const About = () => {
  return (
    <Element name="about">
      <MaxContainer>
        <section className="w-full pb-12 pt-32">
          {/* profile image */}
          <div className="mx-auto mb-10 w-[200px] h-[200px] overflow-hidden rounded-full grayscale hover:grayscale-0 transition-all duration-500">
            <img
              src="/profile2.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* headings */}
          <HeaderCap title="about me" />
          <Header title="4 Years of experience building the apps" />
          <div className="mx-auto w-[700px] py-5">
            <Paragraph desc={aboutDesc} />
          </div>
          {/* tech with progress */}
          <div id="tech-progress" className="flex items-center justify-evenly mt-32 mb-24">
            {technologies.map((item) => (
              <TechProgress key={item.id} item={item} />
            ))}
          </div>
        </section>
      </MaxContainer>
    </Element>
  );
};

export default About;
