import React from "react";
import { colors } from "../../style";
import resume from "../../assets/cv/naval_cv.docx";

/**
 * @author
 * @function Button
 **/

const Button = (props) => {
    const { label, inverse } = props;
    return (
        <a
            href={inverse ? resume : null}
            download={inverse ? 'naval_cv' : null}
            style={{
                boxSizing: "border-box",
                padding: "10px 20px",
                background: inverse ? "transparent" : colors.primaryColor,
                color: inverse ? colors.primaryColor : "#fff",
                display: "inline-block",
                borderRadius: 20,
                boxShadow: inverse ? "" : "0 0 10px 0 #809d80",
                border: inverse ? "1px solid" : "",
                borderColor: colors.primaryColor,
                fontSize: 13,
                letterSpacing: 1,
                fontWeight: 500,
            }}
        >
            {label}
        </a>
    );
};

export default Button;
