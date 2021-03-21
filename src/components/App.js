import React, { Component, useState, useEffect, useCallback } from "react";
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

function App() {
    const [addMovie, setAddMovie] = useState(false);
    const [editMovie, setEditMovie] = useState(false);
    const [deleteMovie, setDeleteMovie] = useState(false);
    const [idMovie, setIdMovie] = useState(0);
    const [movieList, setMovieList] = useState(data);

    const quantityMovies = movieList.length;
    const [count, setCount] = useState(quantityMovies);
    useEffect(() => {
        setCount(quantityMovies);
    }, [movieList]);

    const title = `${count} movies were found`;
    useDocumentTitle(title);

    function showDeleteMovieModal(id, boolean) {
        setDeleteMovie(boolean);
        return setIdMovie(id);
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
                            <SearchPanel />
                            <SearchResults data={movieList} showEditMovieModal={setEditMovie} showDeleteMovieModal={showDeleteMovieModal} count={count} />
                        </Route>
                        <Route exact path="/movie-details">
                            <HeaderSearch />
                            <MovieDetails />
                        </Route>
                    </BrowserRouter>
                    <Footer />
                </div>
                <AddMovie showAddMovie={addMovie} closeAddMovieModal={setAddMovie} />
                <EditMovie showEditMovie={editMovie} closeEditMovieModal={setEditMovie} />
                <DeleteMovie showDeleteMovie={deleteMovie} closeDeleteMovieModal={setDeleteMovie} id={idMovie} deleteMovieFromList={deleteMovieFromListCallback} />
            </ErrorBoundary>
        </div>
    );

}

export default App;