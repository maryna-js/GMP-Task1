import React from "react";
import { useHistory } from "react-router-dom"
import Logo from '../logo';
import './index.scss';

function Header(props) {
    const { showAddMovieModal } = props;
    const history = useHistory();
    return (
        <div className="wrapper" >
            <button onClick={() => {
                props.setSearchValue('');
                props.setSortValue('');
                props.setFilterValue('');
                history.push("/")
            }} className="logo-header">
                <Logo />
            </button>
            <button className="add-button" onClick={e => {
                showAddMovieModal(true);
            }}>
                + Add movie
            </button>
        </div >
    );
}

export default Header;