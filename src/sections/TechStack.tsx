import { Element } from "react-scroll";
import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import { lowerRow, upperRow } from "../data";
import TechImage from "../components/TechTile";
import HeaderCap from "../components/HeaderCap";
import MaxContainer from "../components/MaxContainer";

const TechStack = () => {
  return (
    <Element name="techstack">
      <section className="w-full bg-bgGray">
        <MaxContainer>
          <section className="pb-12 sm:pt-32 pt-24">
            {/* headings */}
            <HeaderCap title="Techs & Tools" />
            <Header title="Techs & Tools I work with" />

            {/* tech stack marquee */}
            <div className="w-full sm:mt-20 sm:mb-24 mt-10 mb-16">
              <Marquee direction="left" speed={30}>
                {upperRow.map((tech, index) => (
                  <TechImage key={index} src={tech.src} alt={tech.alt} />
                ))}
              </Marquee>
              <div className="sm:my-20 my-10" />
              <Marquee direction="right" speed={30}>
                {lowerRow.map((tech, index) => (
                  <TechImage key={index} src={tech.src} alt={tech.alt} />
                ))}
              </Marquee>
            </div>
          </section>
        </MaxContainer>
      </section>
    </Element>
  );
};

export default TechStack;
