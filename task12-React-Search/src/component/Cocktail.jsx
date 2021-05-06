import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, info, glass }) => {
    return (
        <div className="cocktail__item">
            <div className="cocktail__item-img">
                <img src={image} alt={name} />
            </div>
            <div className="cocktail__item-info">
                <div className="cocktail__item-name">{name}</div>
                <div className="cocktail__item-glass">{glass}</div>
                <div className="cocktail__item-alc">{info}</div>
                <Link to={`/cocktail/${id}`} className="btn">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default Cocktail;
