import React, { useState, useEffect } from "react";
import rgbToHex from "./toHex";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bgc = rgb.join(",");
    const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <div
            className={`color__item ${index > 10 && "color-light"}`}
            style={{ backgroundColor: `rgb(${bgc})` }}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue);
            }}
        >
            <p className="color__item-value">{weight}%</p>
            <p className="color__item-hex">{hexValue}</p>
            {alert && <p className="alert">copied to clipboard</p>}
        </div>
    );
};

export default SingleColor;
