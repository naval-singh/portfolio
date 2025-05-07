import { HashLoader } from "react-spinners";
import { colors } from "../contants/colors";

const SplashPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <HashLoader color={colors.mainGray} />
    </div>
  );
};

export default SplashPage;
