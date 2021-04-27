import React, { useState } from "react";

const BtnUpdate = ({ upData }) => {
    return (
        <div>
            <button className="btn" onClick={upData}>
                Update
            </button>
        </div>
    );
};

export default BtnUpdate;
