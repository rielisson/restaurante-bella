import React from "react";
import './Header.css';

function Header() {
    return (
        <div className="navbar">
            <h2 className="title-navbar">Bella Cucina</h2>

            <div className="menu">
                <ul className="list-menu">
                    <li>Menu</li>
                    <li>Specials</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="icons-navbar">
                <span class="material-symbols-outlined">search</span>
                <span className="material-symbols-outlined">shopping_cart</span>
            </div>
        </div>
    )

}

export default Header;