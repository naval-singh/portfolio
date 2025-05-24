import { useEffect, useState, type FC } from "react";
import { colors } from "../contants/colors";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";

interface TechProgressProps {
  item: {
    title: string;
    percentage: number;
  };
}

const TechProgress: FC<TechProgressProps> = ({ item }) => {
  const [percentage, setPercentage] = useState<number>(1);

  useEffect(() => {
    setAnimatedValue(item.percentage);
  }, []);

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
