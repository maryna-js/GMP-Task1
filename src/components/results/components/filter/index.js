import React from "react";
// import './index.scss';

function Filter() {
    return (
        <div className="filter-tabs">
            <button className="filter-tabs-item">All</button>
            <button className="filter-tabs-item">Documentary</button>
            <button className="filter-tabs-item">Comedy</button>
            <button className="filter-tabs-item">Horror</button>
            <button className="filter-tabs-item">Crime</button>
        </div>
    );
}
export default Filter;