import React from "react";
import "./style.css";

/**
 * @author
 * @function Card
 **/

const Card = (props) => {
    const { className, children, style, ...rest } = props;
    const _class = className ? `card ${className}` : `card`;
    return (
        <div className={_class} style={style} {...rest}>
            {children}
        </div>
    );
};

export default Card;
