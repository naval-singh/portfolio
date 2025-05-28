import { socialLinks } from "../data";
import { Element } from "react-scroll";
import IconButton from "../components/IconButton";
import MaxContainer from "../components/MaxContainer";

const Hero = () => {
  return (
    <Element name="home">
      <section className="w-full relative">
        <MaxContainer>
          <div className="w-full h-svh flex items-center justify-center">
            <div className="w-1/2 h-fit flex flex-col items-start justify-center pl-[220px]">
              <h2 className="text-4xl leading-10 tracking-[8px] font-medium uppercase">
                Naval Verma
              </h2>
              <span className="border-b w-6 mt-6 mb-5 border-borderGray" />
              <h4 className="text-sm tracking-[2px]">
                Web and Mobile App Developer
              </h4>
            </div>
            <div className="hero-back w-[calc(50%-100px)] h-full" />

            {/* social links */}
            <div className="absolute left-5 bottom-10">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="border-l-2 h-14 mb-3 border-borderGray" />
                {socialLinks.map((link) => (
                  <a key={link.id} href={link.to} target="_blank">
                    <IconButton icon={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </MaxContainer>
      </section>
    </Element>
  );
};

export default Hero;
