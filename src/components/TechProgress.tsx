import { colors } from "../contants/colors";
import { useEffect, useState, type FC } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

interface TechProgressProps {
  item: {
    title: string;
    percentage: number;
  };
}

const TechProgress: FC<TechProgressProps> = ({ item }) => {
  const [percentage, setPercentage] = useState<number>(1);
  const [isProgressVisible, setIsProgressVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("tech-progress");
      if (!el) return;

      const rect = el.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        setIsProgressVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    isProgressVisible && setAnimatedValue(item.percentage);
  }, [isProgressVisible]);

  const setAnimatedValue = async (maxValue: number = 70) => {
    for (let i = 1; i <= maxValue; i++) {
      setPercentage(i);
      await new Promise((res) => setTimeout(res, 10));
    }
  };

  return (
    <div className="w-36 flex flex-col items-center gap-5">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={5}
        styles={{
          path: { stroke: colors.white, strokeLinecap: "butt" },
          trail: { stroke: colors.baseGray },
          text: { fontSize: 13, fill: colors.white },
        }}
      />
      <p className="text-xs font-medium uppercase tracking-[2px]">
        {item.title}
      </p>
    </div>
  );
};

export default TechProgress;
