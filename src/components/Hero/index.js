import React from "react";
import me from "../../assets/images/me_right.png";
import Button from "../UI/Button";
import "./style.css";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
    return (
        <div className="container" style={{ paddingTop: 70 }} id="Hero">
            <div className="flex-row flex-col justify-sb align-center">
                <div data-aos='fade-right' className="mlr-10 plr-10">
                    <p className="uppercase bold-500 text-color ls-1 mtb-10">
                        <span className="primary-color">Hello,</span> I am Naval Verma
                    </p>
                    <h1 className="text-color ls-1 mtb-10">Software Developer</h1>
                    <p className="grey font-14 mtb-10">Full Stack Developer using JS.</p>
                    <div className="flex-row" style={{ paddingTop: 30 }}>
                        <div>
                            <Button label="Hire me" />
                        </div>
                        <div className="mlr-10">
                            <Button label="Download CV" inverse />
                        </div>
                    </div>
                </div>
                <div data-aos='fade-left' className="meRightImageContainer">
                    <img src={me} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
