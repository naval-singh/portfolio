import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import IconButton from "../components/IconButton";
import MaxContainer from "../components/MaxContainer";

const Hero = () => {
  const socialLinks = [
    { id: 1, title: "linkedin", icon: <FaLinkedin size={30} /> },
    { id: 2, title: "github", icon: <FaGithubSquare size={30} /> },
    { id: 3, title: "facebook", icon: <FaFacebookSquare size={30} /> },
    { id: 4, title: "instagram", icon: <FaInstagramSquare size={30} /> },
    { id: 5, title: "twitter", icon: <FaTwitterSquare size={30} /> },
  ];

  return (
    <section className="w-full relative">
      <MaxContainer>
        <div className="w-full h-svh flex items-center justify-center">
          <div className="w-1/2 h-fit flex flex-col items-start justify-center pl-[220px]">
            <h2 className="text-[32px] leading-10 tracking-[8px] font-semibold uppercase">
              Naval Verma
            </h2>
            <span className="border-b w-6 mt-6 mb-4 border-borderGray" />
            <h4 className="text-sm tracking-[2px]">
              Web and Mobile App Developer
            </h4>
          </div>
          <div className="hero-back w-1/2 h-full" />

          {/* social links */}
          <div className="absolute left-5 bottom-10">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="border-l-2 h-14 border-borderGray" />
              {socialLinks.map((link) => (
                <IconButton key={link.id} icon={link.icon} />
              ))}
            </div>
          </div>
        </div>
      </MaxContainer>
    </section>
  );
};

export default Hero;
