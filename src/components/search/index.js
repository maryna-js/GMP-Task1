import React from "react";
import './index.scss';

function SearchPanel(props) {
    return (
        <div className="wrapper-container">
            <h3 className="heading">Find your movie</h3>
            <div className="search-wrapper">
                <input className="search-input" placeholder="What do you want to watch?" onChange={(e) => props.setSearchValue(e.target.value)} />
                <button className="search-button">Search</button>
            </div>
        </div>
    );
}
export default SearchPanel;