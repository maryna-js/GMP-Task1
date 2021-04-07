import React from "react";
import './index.scss';


export default function DeleteMovie(props) {

    const { showDeleteMovie, closeDeleteMovieModal, id, deleteMovieFromList } = props;
    if (!showDeleteMovie) {
        return null;
    }
    return (
        <div className="add-modal">
            <div className="add-modal-header">
                <button className="add-modal-close" onClick={() => closeDeleteMovieModal(false)}>X</button>
            </div>
            <div>
                <h2 className="add-modal-heading">Delete movie</h2>
            </div>
            <div className="add-modal-container">
                <p className="add-modal-text">
                    Are you sure you want to delete this movie?
                    </p>
                <div className="add-modal-button-container">
                    <button className="add-modal-button-submit" onClick={() => {
                        deleteMovieFromList(id);
                        return closeDeleteMovieModal(false)
                    }}>Confirm</button>
                </div>
            </div>
        </div>
    );

}