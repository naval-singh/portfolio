import Header from "../components/Header";
import HeaderCap from "../components/HeaderCap";
import { TbDeviceMobileCode } from "react-icons/tb";
import { MdOutlineMonitor } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import ServiceTile from "../components/ServiceTile";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <TbDeviceMobileCode size={40} />,
      title: "mobile apps",
      desc: "Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam.",
    },
    {
      id: 2,
      icon: <MdOutlineMonitor size={40} />,
      title: "frontent",
      desc: "Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam.",
    },
    {
      id: 3,
      icon: <FaCode size={40} />,
      title: "backend",
      desc: "Aliquam sed molestie felis, vehicula aliquam leo. Cras a cursus elit. Cras porta efficitur aliquam.",
    },
  ];

  return (
    <div className="w-full pb-40 pt-32">
      {/* headings */}
      <HeaderCap title="services" />
      <Header title="What I Do" />

      {/* services */}
      <div className="mt-10 flex items-center justify-center gap-10">
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
  );
};

export default Services;
