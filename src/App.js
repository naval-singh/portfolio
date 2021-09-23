import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Expertise from "./components/Expertise";
import Testimonial from "./components/Testimonial";
import Specializing from "./components/Specializing";
import LetestProject from "./components/LetestProject";
import Qualification from "./components/Qualificatoin";

/**
 * @author
 * @function App
 **/

const App = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 750,
        });
    }, []);

    return (
        <>
            <Hero />
            <Specializing />
            <Expertise />
            <LetestProject />
            <Qualification />
            <Testimonial />
            <Footer />
        </>
    );
};

export default App;
