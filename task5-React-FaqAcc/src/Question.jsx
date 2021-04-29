import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Question = ({ question }) => {
    const { id, title, info } = question;
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className="info__item">
            <div className="info__item-title">
                <h4>{title}</h4>
                <button className="btn" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? (
                        <AiOutlineMinusCircle />
                    ) : (
                        <AiOutlinePlusCircle />
                    )}
                </button>
            </div>
            {showInfo ? <div className="info__item-text">{info}</div> : false}
        </div>
    );
};

export default Question;
