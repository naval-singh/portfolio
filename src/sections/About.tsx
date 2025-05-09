import Header from "../components/Header";
import HeaderCap from "../components/HeaderCap";
import Paragraph from "../components/Paragraph";

const About = () => {
  const desc = `Over 4 years of experience in business of development, I have had\na chance to work on a 
    variety of projects, with agencies, companies or even individuals. Web applications, Mobile applications, 
    front-end and back-end development. For work inquires send me an Email.`;

  return (
    <div className="w-full pb-12 pt-32">
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
        <Paragraph desc={desc} />
      </div>
    </div>
  );
};

export default About;
