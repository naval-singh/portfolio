import { services } from "../data";
import { Element } from "react-scroll";
import Header from "../components/Header";
import HeaderCap from "../components/HeaderCap";
import ServiceTile from "../components/ServiceTile";
import MaxContainer from "../components/MaxContainer";

const Services = () => {
  return (
    <Element name="services">
      <section className="w-full bg-bgGray">
        <MaxContainer>
          <div className="w-full sm:pb-40 sm:pt-32 pt-24 pb-24">
            {/* headings */}
            <HeaderCap title="services" />
            <Header title="What I Do" />

            {/* services */}
            <div className="mt-10 max-sm:px-5 flex sm:flex-row flex-col items-center justify-center gap-10">
              {services?.map((item) => (
                <ServiceTile
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </MaxContainer>
      </section>
    </Element>
  );
};

export default Services;
