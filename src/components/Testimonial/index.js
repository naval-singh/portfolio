import React from "react";
import profile from "../../assets/images/testimonyPic.png";
import testimonyLeft from "../../assets/images/testimony-01.jpg";
import testimonyRight from "../../assets/images/testimony-02.jpg";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import "./style.css";

/**
 * @author
 * @function Testimonial
 **/

const Testimonial = (props) => {
    return (
        <div className="container" style={{paddingTop: 50}} id="Testimonial">
            <div data-aos="fade-down" style={{ marginBottom: 30 }}>
                <SmallHeading text="Testimonials" />
                <MediumHeading text="What People say" />
            </div>
            <div className="flex-row justify-sb align-center wrap">
                <div data-aos="fade-left" className="testimonyImageContainer">
                    <img src={testimonyLeft} alt="" />
                </div>
                <Card data-aos="zoom-in-up" style={{ width: 500, height: 280, padding: 20 }}>
                    <div className="flex-row align-center">
                        <div className="profileImageContainer">
                            <img src={profile} alt="" />
                        </div>
                        <div className="mlr-10">
                            <p className="primary-color font-16 bold-500">Bruce Banner</p>
                            <p className="text-color font-14 bold-600">Software Developer</p>
                        </div>
                    </div>
                    <p className="mtb-10 ptb-10 grey font-14" style={{ textAlign: "justify" }}>
                        Takes responsibility for their team and product. Balances strategic and
                        tactical goals. Works well with their team, other engineering teams, and the
                        company at large. Knows the entire product, how customers use it, what they
                        want, and where it should go. Good knowledge of tachnical, and have a great
                        experience of MERN technologies.Takes responsibility for their team and
                        product. Balances strategic and tactical goals. Works well with their team,
                        other engineering teams, and the company at large. Knows the entire product,
                        how customers use it, what they want, and where it should go.
                    </p>
                </Card>
                <div data-aos="fade-right" className="testimonyImageContainer">
                    <img src={testimonyRight} alt="" />
                </div>
            </div>
            <Card style={{ width: 500, padding: 20, margin: "50px auto" }}>
                <p className="font-12 capitalize text-color bold-500 text-center mtb-10">
                    Have any Project in mind? <span className="primary-color">say hello at</span>
                </p>
                <p className="font-25 text-color bold-500 text-center">navalverma@outlook.com</p>
            </Card>
        </div>
    );
};

export default Testimonial;
