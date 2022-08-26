import React from "react";
import './navbar.css';
import logo512 from '../../assets/images/logo512.png';

function Navbar() {

    return (
        <nav className="navbar-container">
            <div>
                <img src={logo512} className="navbar-logo" />
            </div>
            <div className="navbar-links">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Players
                    </li>
                    <li>
                        Teams
                    </li>
                    <li>
                        Scores
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;