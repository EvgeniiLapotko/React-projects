import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
    const { id, name, info, image, price } = tour;
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="tours__item">
            <div className="tours__item-img">
                <img src={image} alt="name" />
            </div>
            <div className="tours__item-name">
                <div className="tours__item-title">{name}</div>
                <div className="tours__item-price">${price}</div>
            </div>
            <div className="tours__item-info">
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button
                    className="btn-read"
                    onClick={() => setReadMore(!readMore)}
                >
                    {readMore ? `Show Less` : `Read More`}
                </button>
            </div>
            <button className="btn-delete" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
};

export default Tour;
