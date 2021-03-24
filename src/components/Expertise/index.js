import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { colors } from "../../style";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import me from "../../assets/images/me_left.png";
import "./style.css";
import SocialConnects from "../UI/SocialConnects";

/**
 * @author
 * @function Expertise
 **/

const percentage = 70;

const Expertise = (props) => {
    return (
        <div className="container" style={{ paddingTop: 50 }} id="Expertise">
            <div data-aos='fade-right' className="meLeftImgContainer">
                <img src={me} alt="" />
            </div>
            <div>
                <SmallHeading text="Expertise" />
                <MediumHeading text="Special skills" />
            </div>
            <Card data-aos='flip-up' style={{ width: 330, margin: "97px auto" }}>
                <div style={{ padding: 30 }}>
                    <div className="flex-row align-center">
                        <div style={{ width: 80, height: 80 }}>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    pathColor: colors.primaryColor,
                                    textColor: colors.primaryColor,
                                })}
                            />
                        </div>
                        <h2 className="text-color mlr-10">Development</h2>
                    </div>
                    <p className="font-12 grey mtb-10">
                        JavaScript is one of the greatest programming language we all agree...:&#41;
                    </p>
                </div>
            </Card>
            <SocialConnects />
        </div>
    );
};

export default Expertise;
