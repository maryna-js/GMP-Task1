import React from "react";
import Logo from '../logo';
import './index.scss';

function Header() {
    return (
        <div className="wrapper">
            <Logo />
            <button className="add-button">
                + Add movie
            </button>
        </div>
    );
}
export default Header;