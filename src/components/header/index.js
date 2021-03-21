import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../logo';
import AddMovie from '../add-movie';
import './index.scss';

function Header(props) {
    const { showAddMovieModal } = props;
    return (
        <div className="wrapper" >
            <Link to="/" className="logo-header">
                <Logo />
            </Link>
            <button className="add-button" onClick={e => {
                showAddMovieModal(true);
            }}>
                + Add movie
            </button>
        </div>
    );
}

export default Header;