import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getMovieByIdData, updateMovieByIdData } from "../../actions/movies";
import './index.scss';


function EditMovie(props) {
    const { showEditMovie, closeEditMovieModal, getMovieByIdData, movie, id, updateMovieByIdData } = props;
    if (!showEditMovie) {
        return null;
    }


    useEffect(() => {
        getMovieByIdData(id, movie);
    }, [id])

    const movieOverviewValue = movie.overview && movie.overview;
    const [movieTitle, setMovieTitle] = useState(movie.title);
    const [movieRelease, setMovieRelease] = useState(movie.release_date);
    const [movieURL, setMovieURL] = useState(movie.poster_path);
    const [movieOverview, setMovieOverview] = useState(movieOverviewValue);
    const [movieRuntime, setMovieRuntime] = useState(movie.runtime);
    return (
        <div className="add-modal">
            <div className="add-modal-header">
                <button className="add-modal-close" onClick={() => closeEditMovieModal(false)}>X</button>
            </div>
            <div>
                <h2 className="add-modal-heading">Edit movie</h2>
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="movie-id" className="add-modal-field-label">Movie ID</label>
                <input type="text" id="movie-id" placeholder="MO356984" className="add-modal-field-input" value={movie.id} />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="title" className="add-modal-field-label">Title</label>
                <input type="text" id="title" className="add-modal-field-input" value={movieTitle ? movieTitle : movie.title}
                    onChange={(e) => {
                        setMovieTitle(e.target.value)
                    }} />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="release-date" className="add-modal-field-label">Release date</label>
                <input type="date" id="release-date" placeholder="Release date" className="add-modal-field-input" value={movieRelease ? movieRelease : movie.release_date}
                    onChange={(e) => {
                        setMovieRelease(e.target.value)
                    }}
                />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="movie-url" className="add-modal-field-label">Movie URL</label>
                <input type="text" id="movie-url" placeholder="Movie URL" className="add-modal-field-input" value={movieURL ? movieURL : movie.poster_path}
                    onChange={(e) => {
                        setMovieURL(e.target.value)
                    }}
                />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="genre" className="add-modal-field-label">Genre</label>
                <select name="select" id="genre" className="add-modal-field-input">
                    <option value="value1" vlaue="Release Date">Comedy</option>
                    <option value="value2">Drama</option>
                    <option value="value3">Horror</option>
                </select>
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="overview" className="add-modal-field-label">Overview</label>
                <input type="text" id="overview" placeholder="Overview" className="add-modal-field-input" value={movieOverview ? movieOverview : movie.overview}
                    onChange={(e) => {
                        setMovieOverview(e.target.value)
                    }}
                />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="runtime" className="add-modal-field-label">Runtime</label>
                <input type="text" id="runtime" placeholder="Runtime" className="add-modal-field-input" value={movieRuntime ? movieRuntime : movie.runtime}
                    onChange={(e) => {
                        setMovieRuntime(parseInt(e.target.value, 10))
                    }}
                />
            </div>
            <div className="add-modal-button-container">
                <button className="add-modal-button-reset">Reset</button>
                <button className="add-modal-button-submit" onClick={() => {
                    props.updateMovieByIdData({
                        "id": id,
                        "title": movieTitle,
                        "tagline": "Here's to the fools who dream.",
                        "vote_average": 7.9,
                        "vote_count": 6782,
                        "release_date": movieRelease,
                        "poster_path": movieURL,
                        "overview": movieOverview,
                        "budget": 30000000,
                        "revenue": 445435700,
                        "runtime": movieRuntime,
                        "genres": [
                            "Comedy",
                            "Drama",
                            "Romance"
                        ]
                    });
                    closeEditMovieModal();
                }}>Save</button>
            </div>
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
        getMovieByIdData: id => dispatch(getMovieByIdData(id)),
        updateMovieByIdData: data => dispatch(updateMovieByIdData(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);