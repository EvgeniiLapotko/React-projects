import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt="logo" className="logo" />
                        </Link>
                    </div>
                    <ul className="header__links">
                        <li>
                            <Link to="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <span>About</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
