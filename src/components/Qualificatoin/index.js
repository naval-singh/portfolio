import React from "react";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import me from "../../assets/images/me_left.png";
import "./style.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Tile from "../UI/Tile";
import { qualifications } from "../../Data";

/**
 * @author
 * @function Qualification
 **/

const Qualification = (props) => {
    return (
        <div className="container" style={{ paddingTop: 50 }} id="Qualification">
            <SmallHeading text="Qualifications" />
            <MediumHeading text="My Educations" />
            <div className="flex-row justify-sb align-center">
                <div>
                    <div data-aos="fade-up-right" className="meLeftImageContainer">
                        <img src={me} alt="" />
                    </div>
                    <Card
                        className="flex-row ptb-10"
                        style={{ width: 280, justifyContent: "center", borderRadius: 30 }}
                    >
                        <div className="mlr-10">
                            <Button label="Hire me" />
                        </div>
                        <div className="mlr-10">
                            <Button label="Download CV" inverse />
                        </div>
                    </Card>
                </div>
                <div className="flex-row wrap">
                    {qualifications.map((item, index) => (
                        <Tile
                            key={index}
                            heading={item.heading}
                            title={item.title}
                            year={item.year}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Qualification;
