import React from "react";
import { Link } from "react-router-dom";
import Logo from '../logo';
import Search from '../../assets/icons/loupe.png';
import './index.scss';

function HeaderSearch() {
    return (
        <div className="wrapper" >
            <Link to="/" className="logo-header">
                <Logo />
            </Link>
            <button>
                <img src={Search} alt="" width="24px" />
            </button>
        </div>
    );
    // }
}
export default HeaderSearch;