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
        <section className="w-full pb-12 sm:pt-32 pt-20">
          {/* profile image */}
          <div className="mx-auto mb-10 sm:w-48 sm:h-48 w-40 h-40 overflow-hidden rounded-full grayscale hover:grayscale-0 transition-all duration-500">
            <img
              src="/profile2.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* headings */}
          <HeaderCap title="about me" />
          <Header title="4 Years of experience building the apps" />
          <div className="mx-auto sm:w-[700px] w-full py-5 max-sm:px-5">
            <Paragraph desc={aboutDesc} />
          </div>
          {/* tech with progress */}
          <div id="tech-progress" className="flex sm:flex-row flex-col items-center sm:justify-evenly justify-center max-sm:gap-16 sm:mt-32 mt-16 sm:mb-24 mb-16">
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
