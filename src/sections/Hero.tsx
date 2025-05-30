import { socialLinks } from "../data";
import { Element } from "react-scroll";
import IconButton from "../components/IconButton";
import MaxContainer from "../components/MaxContainer";

const Hero = () => {
  return (
    <Element name="home">
      <section className="w-full relative">
        <MaxContainer>
          <div className="w-full h-svh flex items-center sm:justify-center relative">
            <div className="sm:w-1/2 w-2/3 h-fit flex flex-col items-start justify-center sm:pl-[220px] pl-5">
              <h2 className="sm:text-4xl text-xl leading-10 sm:tracking-[8px] tracking-[4px] font-medium uppercase">
                Naval Verma
              </h2>
              <span className="border-b w-6 sm:mt-6 mt-3 sm:mb-5 mb-2 border-borderGray" />
              <h4 className="text-sm max-sm:text-xs tracking-[2px]">
                Web and Mobile App Developer
              </h4>
            </div>
            <div className="hero-back -scale-x-100 sm:scale-[1.2] sm:scale-x-[-1.2] max-sm:-z-10 max-sm:absolute sm:bg-[position:180px_30px] max-sm:bg-[position:-140px_-20px] sm:w-[calc(50%-100px)] w-full h-full" />

            {/* social links */}
            <div className="max-sm:hidden absolute left-5 bottom-10">
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
