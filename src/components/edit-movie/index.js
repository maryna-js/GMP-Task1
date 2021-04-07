import React from "react";
import './index.scss';


export default function EditMovie(props) {
    const { showEditMovie, closeEditMovieModal } = props;
    if (!showEditMovie) {
        return null;
    }
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
                <input type="text" id="movie-id" placeholder="MO356984" className="add-modal-field-input" />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="title" className="add-modal-field-label">Title</label>
                <input type="text" id="title" placeholder="Title" className="add-modal-field-input" />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="release-date" className="add-modal-field-label">Release date</label>
                <input type="date" id="release-date" placeholder="Release date" className="add-modal-field-input" />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="movie-url" className="add-modal-field-label">Movie URL</label>
                <input type="text" id="movie-url" placeholder="Movie URL" className="add-modal-field-input" />
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
                <input type="text" id="overview" placeholder="Overview" className="add-modal-field-input" />
            </div>
            <div className="add-modal-field-container">
                <label htmlFor="runtime" className="add-modal-field-label">Runtime</label>
                <input type="text" id="runtime" placeholder="Runtime" className="add-modal-field-input" />
            </div>
            <div className="add-modal-button-container">
                <button className="add-modal-button-reset">Reset</button>
                <button className="add-modal-button-submit">Save</button>
            </div>
        </div>
    );
}