import React from "react";
import { Skills } from "../../Data";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import Skill from "../UI/Skill";
import SmallHeading from "../UI/SmallHeading";

/**
 * @author
 * @function Specializing
 **/

const Specializing = (props) => {
    return (
        <div className="container" id="Specializing">
            <Card style={{ padding: 50 }}>
                <SmallHeading text="What i do" />
                <MediumHeading text="Specializing in" />
                <div data-aos='fade-up' className="flex-row wrap justify-sb" style={{ padding: 30, paddingBottom: 0 }}>
                    {Skills.map((skill, index) => (
                        <Skill
                            key={index}
                            value={skill.value}
                            color={skill.color}
                            skillName={skill.skillName}
                            description={skill.description}
                        />
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Specializing;
