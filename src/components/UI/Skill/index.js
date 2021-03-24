import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { colors } from "../../../style";
import "./style.css";

/**
 * @author
 * @function Skill
 **/

const Skill = (props) => {
    const { value, color, skillName, description } = props;
    return (
        <div className='flex-row align-center mtb-10' style={{width: 340}}>
            <div className='progressBarContainer'>
                <CircularProgressbar
                    value={value}
                    text={`${value}%`}
                    styles={buildStyles({
                        pathColor: color,
                        textColor: colors.primaryColor,
                    })}
                />
            </div>
            <div className='mlr-10'>
                <p className='font-16 bold-500 text-color uppercase mtb-10'>{skillName}</p>
                <p className='font-12 bold-500 grey uppercase mtb-10'>{description}</p>
            </div>
        </div>
    );
};

export default Skill;
