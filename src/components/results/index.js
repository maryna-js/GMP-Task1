import React from "react";
import Filter from './components/filter/';
import SortBy from './components/sort/';
import ResultCount from './components/count';
import ItemList from './components/items-list';
import './index.scss';

function SearchResults(props) {
    const { showEditMovieModal, showDeleteMovieModal, data, count } = props;
    return (
        <div className="wrapper-results">
            <div className="wrapper-filter">
                <Filter />
                <SortBy />
            </div>
            <div className="wrapper-results-box">
                <ResultCount count={count} />
                <ItemList data={data} showEditMovieModal={showEditMovieModal} showDeleteMovieModal={showDeleteMovieModal} />
            </div>
        </div>
    );
}
export default SearchResults;