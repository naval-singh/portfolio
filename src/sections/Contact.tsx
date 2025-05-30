import { useState, type FormEvent } from "react";
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
  const currentDomain = window.location.origin;
  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });

  const setFormValue = (key: string, value: string) => {
    setForm((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        domain: currentDomain,
      };
      const url = "https://contact-naval.up.railway.app/contact";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.status === 200) {
        const data = await res.json();
        alert(data?.message ?? "Sumitted...");
        setForm({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <Element name="contact">
      <MaxContainer>
        <section className="w-full sm:pb-12 pb-20 sm:pt-32 pt-24">
          {/* headings */}
          <HeaderCap title="contact" />
          <Header title="Get in touch" />

          {/* form */}
          <form
            onSubmit={handleFormSubmit}
            className="mx-auto sm:w-[776px] w-full py-4 max-sm:px-5 flex flex-col gap-10 max-sm:gap-6 mt-4 mb-14"
          >
            <Input
              required
              placeholder="NAME"
              value={form.name}
              setValue={(val) => setFormValue("name", val)}
            />
            <Input
              required
              placeholder="EMAIL"
              type="email"
              value={form.email}
              setValue={(val) => setFormValue("email", val)}
            />
            <Input
              required
              placeholder="MESSAGE"
              type="textbox"
              value={form.message}
              setValue={(val) => setFormValue("message", val)}
            />
            <Button label="send message" marginTop="mt-6" type="submit" />
          </form>

          {/* contact info */}
          <div className="w-full flex sm:flex-row flex-col items-center sm:justify-evenly justify-center">
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
