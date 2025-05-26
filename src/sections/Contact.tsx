import type { FormEvent } from "react";
import { Element } from "react-scroll";
import Input from "../components/Input";
import Header from "../components/Header";
import Button from "../components/Button";
import { TbMailFilled } from "react-icons/tb";
import { FaSquarePhone } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import HeaderCap from "../components/HeaderCap";
import MaxContainer from "../components/MaxContainer";
import InformationIcon from "../components/InformationIcon";

const Contact = () => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Element name="contact">
      <MaxContainer>
        <section className="w-full pb-12 pt-32">
          {/* headings */}
          <HeaderCap title="contact" />
          <Header title="Get in touch" />

          {/* form */}
          <form
            // method="POST"
            // action="https://formsubmit.co/navalverma@outlook.com"
            onSubmit={handleFormSubmit}
            className="mx-auto w-[776px] py-4 flex flex-col gap-10 mt-4 mb-14"
          >
            <Input name="name" placeholder="NAME" />
            <Input name="email" placeholder="EMAIL" type="email" />
            <Input name="message" placeholder="MESSAGE" type="textbox" />
            <Button label="send message" marginTop="mt-6" type="submit" />
          </form>

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
      </MaxContainer>
    </Element>
  );
};

export default Contact;
