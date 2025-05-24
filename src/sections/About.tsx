import Header from "../components/Header";
import HeaderCap from "../components/HeaderCap";
import MaxContainer from "../components/MaxContainer";
import Paragraph from "../components/Paragraph";
import TechProgress from "../components/TechProgress";

const About = () => {
  const desc = `Over 4 years of experience in business of development, I have had\na chance to work on a 
    variety of projects, with agencies, companies or even individuals. Web applications, Mobile applications, 
    front-end and back-end development. For work inquires send me an Email.`;

  const techs = [
    { id: 1, title: "java script", percentage: 90 },
    { id: 2, title: "type script", percentage: 80 },
    { id: 3, title: "React js", percentage: 85 },
    { id: 4, title: "React Native", percentage: 80 },
  ];

  return (
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
          <Paragraph desc={desc} />
        </div>
        {/* tech with progress */}
        <div className="flex items-center justify-evenly mt-32 mb-14">
          {techs.map((item) => (
            <TechProgress key={item.id} item={item} />
          ))}
        </div>
      </section>
    </MaxContainer>
  );
};

export default About;
