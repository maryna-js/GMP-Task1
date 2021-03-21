import React from "react";
import SearchResults from '../results';
import Details from './components/details';
import './index.scss';

const data = [
    {
        id: 7,
        name: 'Item Name1',
        genre: 'Item Genre',
        year: 2015

    },
    {
        id: 8,
        name: 'Item Name2',
        genre: 'Item Genre',
        year: 2015

    },
    {
        id: 9,
        name: 'Item Name3',
        genre: 'Item Genre',
        year: 2015

    },
    {
        id: 10,
        name: 'Item Name1',
        genre: 'Item Genre',
        year: 2015

    },
    {
        id: 11,
        name: 'Item Name2',
        genre: 'Item Genre',
        year: 2015

    },
    {
        id: 12,
        name: 'Item Name3',
        genre: 'Item Genre',
        year: 2015

    }
];

function MovieDetails() {
    return (
        <div className="wrapper-details">
            <Details />
            <SearchResults data={data} />
        </div>
    );
}
export default MovieDetails;