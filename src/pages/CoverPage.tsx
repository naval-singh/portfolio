import Hero from "../sections/Hero";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";
import Sidebar from "../sections/Sidebar";
import Services from "../sections/Services";
import TechStack from "../sections/TechStack";
import SocialFooter from "../sections/SocialFooter";

const CoverPage = () => {
  return (
    <main className="relative">
      <Sidebar />
      <Hero />
      <About />
      <Services />
      <Resume />
      <TechStack />
      <Contact />
      <SocialFooter />
      <Footer />
    </main>
  );
};

export default CoverPage;
