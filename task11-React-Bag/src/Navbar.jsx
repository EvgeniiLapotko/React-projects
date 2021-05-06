import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
    const { amount } = useGlobalContext();
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__inner">
                    <h4>Use Reducer</h4>
                    <div className="nav__item">
                        <FaShoppingCart className="nav__item-icon" />
                        <div className="nav__item-amount">
                            <p className="nav__item-total">{amount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
