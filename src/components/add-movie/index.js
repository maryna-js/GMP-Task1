import React, { useState } from "react";
import { connect } from 'react-redux';
import { createMovieData } from '../../actions/movies';
import './index.scss';


function AddMovieModal(props) {
    const { showAddMovie, closeAddMovieModal } = props;
    const [movieTitle, setMovieTitle] = useState('');
    const [movieRelease, setMovieRelease] = useState('');
    const [movieURL, setMovieURL] = useState('');
    const [movieOverview, setMovieOverview] = useState('');
    const [movieRuntime, setMovieRuntime] = useState(0);
    if (!showAddMovie) {
        return null;
    }
    return (
        <div className="add-modal">
            <div className="add-modal-header">
                <button className="add-modal-close" onClick={() => closeAddMovieModal(false)}>X</button>
            </div>
            <div>
                <h2 className="add-modal-heading">Add movie</h2>
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="title" className="add-modal-field-label">Title</label>
                <input type="text" id="title" placeholder="Title" className="add-modal-field-input" onChange={(e) => {
                    setMovieTitle(e.target.value)
                }} />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="release-date" className="add-modal-field-label">Release date</label>
                <input type="date" id="release-date" placeholder="Release date" className="add-modal-field-input"
                    onChange={(e) => {
                        setMovieRelease(e.target.value)
                    }} />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="movie-url" className="add-modal-field-label">Movie URL</label>
                <input type="text" id="movie-url" placeholder="Movie URL" className="add-modal-field-input" onChange={(e) => {
                    setMovieURL(e.target.value)
                }} />
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
                <input type="text" id="overview" placeholder="Overview" className="add-modal-field-input"
                    onChange={(e) => {
                        setMovieOverview(e.target.value)
                    }} />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="runtime" className="add-modal-field-label">Runtime</label>
                <input type="text" id="runtime" placeholder="Runtime" className="add-modal-field-input"
                    onChange={(e) => {
                        setMovieRuntime(parseInt(e.target.value, 10))
                    }} />
            </div>
            <div className="add-modal-button-container">
                <button className="add-modal-button-reset">Reset</button>
                <button className="add-modal-button-submit" onClick={() => {
                    props.createMovieData({
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
                    closeAddMovieModal();
                }
                }>Submit</button>
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
        createMovieData: data => dispatch(createMovieData(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieModal);