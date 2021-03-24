import React from "react";
import Card from "./Card";

/**
 * @author
 * @function Tile
 **/

const Tile = (props) => {
    const { heading, title, year, description } = props;
    return (
        <Card data-aos="zoom-in-up" style={{ margin: 10, padding: 20, width: 260 }}>
            <p className="font-14 primary-color uppercase bold-500">{`${heading} (${year})`}</p>
            <p className="font-14 text-color uppercase bold-500 ptb-10">{title}</p>
            <p className="font-12 grey capitalize bold-500">{description}</p>
        </Card>
    );
};

export default Tile;
