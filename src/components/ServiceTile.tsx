import { useState, type FC, type ReactNode } from "react";
import { motion } from "framer-motion";

interface ServiceTileProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const ServiceTile: FC<ServiceTileProps> = ({ icon, title, desc }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      className="
        w-[400px] h-[310px] border border-borderGray flex flex-col items-center gap-10
        hover:border-white transition-colors duration-200 relative
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Icon */}
      <motion.div
        className="absolute z-10 p-2 bg-bgGray"
        animate={{
          top: isHovered ? "-28px" : "40%",
          translateY: isHovered ? "0%" : "-40%",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {icon}
      </motion.div>

      {/* Animated Title */}
      <motion.span
        className="absolute text-xs text-white uppercase tracking-[2px] z-0"
        animate={{
          top: isHovered ? "25%" : "60%",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 16,
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {title}
      </motion.span>

      {/* Animated Desc */}
      <motion.div
        className="absolute px-10 text-center text-sm text-white"
        animate={{
          top: "50%",
          opacity: isHovered ? 1 : 0,
          scaleX: isHovered ? 1 : 0,
          scaleY: isHovered ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.15, ease: "easeInOut" }}
      >
        {desc}
      </motion.div>
    </motion.div>
  );
};

export default ServiceTile;
