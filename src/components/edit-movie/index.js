import React from "react";
import { createPortal } from 'react-dom';
import './index.scss';


export default class EditMovie extends React.Component {
    render() {
        if (!this.props.showEditMovie) {
            return null;
        }
        return (
            <div className="add-modal">
                <div className="add-modal-header">
                    <button className="add-modal-close" onClick={this.props.closeEditMovieModal}>X</button>
                </div>
                <div>
                    <h2 className="add-modal-heading">Edit movie</h2>
                </div>
                <div className="add-modal-field-container">
                    <label for="movie-id" className="add-modal-field-label">Movie ID</label>
                    <input type="text" id="movie-id" placeholder="MO356984" className="add-modal-field-input" />
                </div>
                <div className="add-modal-field-container">
                    <label for="title" className="add-modal-field-label">Title</label>
                    <input type="text" id="title" placeholder="Title" className="add-modal-field-input" />
                </div>
                <div className="add-modal-field-container">
                    <label for="release-date" className="add-modal-field-label">Release date</label>
                    <input type="date" id="release-date" placeholder="Release date" className="add-modal-field-input" />
                </div>
                <div className="add-modal-field-container">
                    <label for="movie-url" className="add-modal-field-label">Movie URL</label>
                    <input type="text" id="movie-url" placeholder="Movie URL" className="add-modal-field-input" />
                </div>
                <div className="add-modal-field-container">
                    <label for="genre" className="add-modal-field-label">Genre</label>
                    <select name="select" id="genre" className="add-modal-field-input">
                        <option value="value1" vlaue="Release Date">Comedy</option>
                        <option value="value2">Drama</option>
                        <option value="value3">Horror</option>
                    </select>
                </div>
                <div className="add-modal-field-container">
                    <label for="overview" className="add-modal-field-label">Overview</label>
                    <input type="text" id="overview" placeholder="Overview" className="add-modal-field-input" />
                </div>
                <div className="add-modal-field-container">
                    <label for="runtime" className="add-modal-field-label">Runtime</label>
                    <input type="text" id="runtime" placeholder="Runtime" className="add-modal-field-input" />
                </div>
                <div className="add-modal-button-container">
                    <button className="add-modal-button-reset">Reset</button>
                    <button className="add-modal-button-submit">Save</button>
                </div>
            </div>
        );
    }
}