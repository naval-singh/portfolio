import React from "react";
import SocialConnects from "../UI/SocialConnects";
import conversion from "../../assets/images/conversion.png";
import "./style.css";
import { Link } from "react-scroll";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
    return (
        <div className="container" style={{ paddingBottom: 40 }}>
            <div className="flex-row justify-sb align-center">
                <SocialConnects />
                <div>
                    <nav className="uppercase font-14">
                        <Link to="Hero" spy={true} smooth={true} className="grey plr-10">
                            Home
                        </Link>
                        <Link to="Specializing" spy={true} smooth={true} className="grey plr-10">
                            Specializing
                        </Link>
                        <Link to="Expertise" spy={true} smooth={true} className="grey plr-10">
                            Expertise
                        </Link>
                        <Link to="Qualification" spy={true} smooth={true} className="grey plr-10">
                            Qualification
                        </Link>
                        <Link to="Testimonial" spy={true} smooth={true} className="grey plr-10">
                            Testimonial
                        </Link>
                    </nav>
                </div>
                <div className="conversionImageContainer primary-bgcolor">
                    <a>
                        <img src={conversion} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
