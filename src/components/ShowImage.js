import React from "react";

const ShowImage = ({ image }) => {
    return (
        <div>
            <img src={image.urls.small} alt={image.describtion} />
        </div>
    );
};

export default ShowImage;
