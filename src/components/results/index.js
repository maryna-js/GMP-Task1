import React from "react";
import Filter from './components/filter/';
import SortBy from './components/sort/';
import ResultCount from './components/count';
import ItemList from './components/items-list';
import './index.scss';

function SearchResults(props) {
    const { showEditMovieModal, showDeleteMovieModal, data, count, setSortValue, setFilterValue } = props;
    return (
        <div className="wrapper-results">
            <div className="wrapper-filter">
                <Filter />
                <SortBy setSortValue={setSortValue} setFilterValue={setFilterValue} />
            </div>
            <div className="wrapper-results-box">
                <ResultCount count={count} />
                {
                    data ?
                        <ItemList data={data && data} showEditMovieModal={showEditMovieModal} showDeleteMovieModal={showDeleteMovieModal} />
                        :
                        <p className="result-count">Not Found</p>
                }
            </div>
        </div>
    );
}
export default SearchResults;