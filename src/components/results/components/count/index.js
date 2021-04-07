import React from "react";
import './index.scss';

function ResultCount({ count }) {
    return (
        <div className="result-count">
            <span className="result-count-number">{count}</span>
            <span>movies found</span>
        </div>
    );
}
export default ResultCount;