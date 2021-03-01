import React from "react";
import './index.scss';

function SortBy() {
    return (
        <div className="sort-items">
            <div className="sort-by">Sort by</div>
            <select name="select" className="filter-tabs-item">
                <option value="value1" vlaue="Release Date">Release Date</option>
                <option value="value2">Value 2</option>
                <option value="value3">Value 3</option>
            </select>
        </div>
    );
}
export default SortBy;