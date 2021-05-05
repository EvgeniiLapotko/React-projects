import React from "react";
import logo from "./assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom;
        openSubmenu(page, { center, bottom });
    };
    const deleteSubmenu = (e) => {
        closeSubmenu();
    };

    const handleMenu = (e) => {
        if (!e.target.classList.contains("link-btn")) {
            closeSubmenu();
        }
    };
    return (
        <nav className="nav" onMouseOver={handleMenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className="nav-logo" />
                    <button className="btn toogle-btn" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={(e) => displaySubmenu(e)}
                        >
                            products
                        </button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={(e) => displaySubmenu(e)}
                        >
                            developers
                        </button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={(e) => displaySubmenu(e)}
                        >
                            company
                        </button>
                    </li>
                </ul>
                <button className="btn signin-btn">Sign In</button>
            </div>
        </nav>
    );
};

export default Navbar;
