import React from "react";
import Filter from './components/filter/';
import SortBy from './components/sort/';
import ResultCount from './components/count';
import ItemList from './components/items-list';
import './index.scss';

const data = [
    {
        id: 1,
        name: 'Item Name1',
        genre: 'Item Genre',
        year: 2015

    },
    {
        id: 2,
        name: 'Item Name2',
        genre: 'Item Genre',
        year: 2015

    },
    {
        id: 3,
        name: 'Item Name3',
        genre: 'Item Genre',
        year: 2015

    }
];

function SearchResults(props) {
    const { showEditMovieModal, showDeleteMovieModal } = props;
    return (
        <div className="wrapper-results">
            <div className="wrapper-filter">
                <Filter />
                <SortBy />
            </div>
            <div className="wrapper-results-box">
                <ResultCount />
                <ItemList data={data} showEditMovieModal={showEditMovieModal} showDeleteMovieModal={showDeleteMovieModal} />
            </div>
        </div>
    );
}
export default SearchResults;