import { socialLinks } from "../data";
import { motion } from "framer-motion";
import MaxContainer from "../components/MaxContainer";

const SocialFooter = () => {
  return (
    <section className="w-full border-t border-borderGray">
      <MaxContainer>
        <div className="w-full h-28">
          <ul className="h-14 mt-14 flex items-center justify-evenly uppercase text-xs font-medium tracking-[4px] cursor-pointer">
            {socialLinks.map((link) => (
              <motion.a
                href={link.to}
                target="_blank"
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
              </motion.a>
            ))}
          </ul>
        </div>
      </MaxContainer>
    </section>
  );
};

export default SocialFooter;
