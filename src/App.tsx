import SplashPage from "./pages/SplashPage";
import CoverPage from "./pages/CoverPage";
import { useEffect, useState } from "react";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashPage />;
  } else {
    return <CoverPage />;
  }
};

export default App;
