import React from "react";

import ShowImage from "./ShowImage";

const ShowList = ({ images }) => {
    const image = images.map((value, index) => {
        return <ShowImage image={value} key={index} />;
    });
    return <div>{image}</div>;
};

export default ShowList;
