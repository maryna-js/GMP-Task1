import React from "react";
// import './index.scss';

function SortBy(props) {
    const { setSortValue, setFilterValue } = props;
    return (
        <div className="sort-items">
            <div className="sort-wrapper">
                <div className="sort-by">Sort by: Title</div>
                <select name="select" className="filter-tabs-item" onChange={(e) => { setSortValue(e.target.value) }}>
                    <option>Choose sort</option>
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
                </select>
            </div>
            <div className="sort-wrapper">
                <div className="sort-by">Filter by genre</div>
                <select name="select" className="filter-tabs-item" onChange={(e) => { setFilterValue(e.target.value) }}>
                    <option>Choose genre</option>
                    <option value="drama" >Drama</option>
                    <option value="comedy">Comedy</option>
                    <option value="adventure">Adventure</option>
                    <option value="fantasy">Fantasy</option>
                </select>
            </div>
        </div>
    );
}
export default SortBy;