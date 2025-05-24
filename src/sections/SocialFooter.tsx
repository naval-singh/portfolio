import { motion } from "framer-motion";
import MaxContainer from "../components/MaxContainer";

const SocialFooter = () => {
  const socialLinks = [
    { id: 1, title: "linkedin", color: "#0077b5" },
    { id: 2, title: "github", color: "#10a30b" },
    { id: 3, title: "facebook", color: "#3b5998" },
    { id: 4, title: "instagram", color: "#e4405f" },
    { id: 5, title: "twitter", color: "#1da1f2" },
  ];

  return (
    <section className="w-full border-t border-borderGray">
      <MaxContainer>
        <div className="w-full h-28">
          <ul className="h-14 mt-14 flex items-center justify-evenly uppercase text-xs font-medium tracking-[4px] cursor-pointer">
            {socialLinks.map((link) => (
              <motion.li
                key={link.id}
                className="text-mainGray transition-colors duration-150 ease-in-out py-2"
                whileHover={{ x: [-5, 5], color: link.color }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 8,
                  duration: 0.6,
                }}
              >
                {link.title}
              </motion.li>
            ))}
          </ul>
        </div>
      </MaxContainer>
    </section>
  );
};

export default SocialFooter;
