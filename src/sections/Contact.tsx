import { FaSquarePhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FaLocationPin } from "react-icons/fa6";
import InformationIcon from "../components/InformationIcon";
import HeaderCap from "../components/HeaderCap";
import Header from "../components/Header";

const Contact = () => {
  return (
    <section className="w-full">
      {/* headings */}
      <HeaderCap title="contact" />
      <Header title="Get in touch" />


      {/* contact info */}
      <div className="w-full flex items-center justify-evenly">
        <InformationIcon
          icon={<FaSquarePhone size={36} />}
          label="+91 9009824492"
        />
        <InformationIcon
          icon={<TbMailFilled size={40} />}
          label="navalverma@outlook.com"
        />
        <InformationIcon
          icon={<FaLocationPin size={36} />}
          label="Mumbai, India"
        />
      </div>
    </section>
  );
};

export default Contact;
