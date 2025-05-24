import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Resume from "../sections/Resume";
import Services from "../sections/Services";
import Sidebar from "../sections/Sidebar";
import SocialFooter from "../sections/SocialFooter";

const CoverPage = () => {
  return (
    <main className="relative">
      <Sidebar />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Contact />
      <SocialFooter />
      <Footer />
    </main>
  );
};

export default CoverPage;
