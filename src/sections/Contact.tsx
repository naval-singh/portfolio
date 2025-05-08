import { FaSquarePhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { FaLocationPin } from "react-icons/fa6";
import InformationIcon from "../components/InformationIcon";
import HeaderCap from "../components/HeaderCap";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import type { FormEvent } from "react";

const Contact = () => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="w-full pb-12 pt-32">
      {/* headings */}
      <HeaderCap title="contact" />
      <Header title="Get in touch" />

      {/* form */}
      <form
        onSubmit={handleFormSubmit}
        className="mx-auto w-[776px] py-4 flex flex-col gap-10 mt-4 mb-14"
      >
        <Input placeholder="NAME" />
        <Input placeholder="EMAIL" type="email" />
        <Input placeholder="MESSAGE" type="textbox" />
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
  );
};

export default Contact;
