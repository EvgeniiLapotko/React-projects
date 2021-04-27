import React, { useState } from "react";

const BtnClear = ({ clearData }) => {
    return (
        <div>
            <button className="btn" onClick={clearData}>
                Clear All
            </button>
        </div>
    );
};

export default BtnClear;
