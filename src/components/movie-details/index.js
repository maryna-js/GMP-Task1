import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { getMovieByIdData } from "../../actions/movies";
import SearchResults from '../results';
import Details from './components/details';
// import './index.scss';

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

function MovieDetails(props) {
    const { id } = useParams();
    const {
        getMovieByIdData, movie
    } = props;
    useEffect(() => {
        getMovieByIdData(id);
    }, [])

    return (
        <div className="wrapper-details">
            <Details movieDetails={movie && movie} />
            <SearchResults data={data} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovieByIdData: id => dispatch(getMovieByIdData(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
// export default MovieDetails;