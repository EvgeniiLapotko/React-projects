import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="container__error">
            <div className="error-container">
                <h1>Oops! It's A Dead End</h1>
                <Link to="/" className="btn">
                    Back Home
                </Link>
            </div>
        </div>
    );
};

export default Error;
