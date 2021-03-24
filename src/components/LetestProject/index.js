import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import letestProject from "../../assets/recentProjects/portfolio-001.png";
import "./style.css";
import Button from "../UI/Button";

/**
 * @author
 * @function LetestProject
 **/

const LetestProject = (props) => {
    return (
        <div className="container" style={{ marginTop: 70 }}>
            <Card
                data-aos="zoom-in-up"
                className="flex-row justify-sb align-center"
                style={{ padding: "50px 0" }}
            >
                <div className="text-center" style={{ flex: 1 }}>
                    <SmallHeading text="Portfolio" />
                    <MediumHeading text="Letest Projects" />
                    <div className="mtb-10 ptb-10">
                        <Button label="portfolio" />
                    </div>
                </div>
                <div className="letestProjectImageContainer">
                    <img src={letestProject} alt="" />
                </div>
            </Card>
        </div>
    );
};

export default LetestProject;
