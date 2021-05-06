import React, { useState, useContext } from "react";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";

const App = () => {
    const { loading } = useGlobalContext();

    if (loading) {
        return (
            <div className="wrapper-loader">
                <div className="lds-hourglass"></div>
            </div>
        );
    }
    return (
        <>
            <Navbar />
            <CartContainer />
        </>
    );
};

export default App;
