import React, { useState, useEffect, useCallback } from "react";
import { connect } from 'react-redux';
import {
    BrowserRouter,
    Route,
} from "react-router-dom";
import Header from './header';
import HeaderSearch from './header-search';
import SearchPanel from './search';
import SearchResults from './results';
import Footer from './footer';
import ErrorBoundary from './error-boundary';
import AddMovie from './add-movie';
import EditMovie from './edit-movie';
import DeleteMovie from './delete-movie';
import MovieDetails from './movie-details';
import '../styles/style.scss';
import { moviesFetchData } from '../actions/movies';



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

    },
    {
        id: 4,
        name: 'Item Name1',
        genre: 'Item Genre',
        year: 2015

    },
    {
        id: 5,
        name: 'Item Name2',
        genre: 'Item Genre',
        year: 2015

    },
    {
        id: 6,
        name: 'Item Name3',
        genre: 'Item Genre',
        year: 2015

    }
];

const useDocumentTitle = title => {
    useEffect(() => {
        document.title = title;
    }, [title]);
}

function App(props) {
    const [addMovie, setAddMovie] = useState(false);
    const [editMovie, setEditMovie] = useState(false);
    const [deleteMovie, setDeleteMovie] = useState(false);
    const [movieList, setMovieList] = useState(data);
    const [idMovie, setIdMovie] = useState(0);
    const [idMovieEdit, setIdMovieEdit] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [filterValue, setFilterValue] = useState('');

    const quantityMovies = props.movies.totalAmount && props.movies.totalAmount;
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (quantityMovies) {
            setCount(quantityMovies);
        }

    }, [movieList]);
    useEffect(() => {
        props.fetchData(`http://localhost:4000/movies?search=${searchValue}&searchBy=title&sortBy=title&sortOrder=${sortValue}&filter=${filterValue}`);
    }, [props.movies.totalAmount, searchValue, sortValue, filterValue]);

    const title = `${count} movies were found`;
    useDocumentTitle(title);

    function showDeleteMovieModal(id, boolean) {
        setDeleteMovie(boolean);
        return setIdMovie(id);
    }

    function showEditMovieModal(id, boolean) {
        setEditMovie(boolean);
        return setIdMovieEdit(id);
    }

    const deleteMovieFromListCallback = useCallback(
        () => {
            deleteMovieFromList(idMovie);
        },
        [idMovie],
    );

    function deleteMovieFromList(id) {
        const filteredData = movieList.filter(function (item) {
            return item.id !== id;
        });
        setMovieList(filteredData);
    }

    return (
        <div className="container">
            <ErrorBoundary>
                <div className={`${(addMovie || editMovie || deleteMovie) && 'container-blur'}`}>
                    <BrowserRouter>
                        <Route exact path="/">
                            <Header showAddMovieModal={setAddMovie} />
                            <SearchPanel setSearchValue={setSearchValue} />
                            <SearchResults data={props.movies.data && props.movies.data} showEditMovieModal={showEditMovieModal} showDeleteMovieModal={showDeleteMovieModal} count={quantityMovies} setSortValue={setSortValue} setFilterValue={setFilterValue} />
                        </Route>
                        <Route exact path="/movie-details/:id" >
                            <HeaderSearch />
                            <MovieDetails />
                        </Route>
                    </BrowserRouter>
                    <Footer />
                </div>
                <AddMovie showAddMovie={addMovie} closeAddMovieModal={setAddMovie} />
                <EditMovie showEditMovie={editMovie} closeEditMovieModal={setEditMovie} id={idMovieEdit} />
                <DeleteMovie showDeleteMovie={deleteMovie} closeDeleteMovieModal={setDeleteMovie} id={idMovie} deleteMovieFromList={deleteMovieFromListCallback} />
            </ErrorBoundary>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(moviesFetchData(url))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);