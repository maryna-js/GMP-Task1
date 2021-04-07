import React from "react";
import { connect } from 'react-redux';
import { removeMovieByIdData } from "../../actions/movies";
import './index.scss';


function DeleteMovie(props) {

    const { showDeleteMovie, closeDeleteMovieModal, id, deleteMovieFromList, removeMovieByIdData } = props;
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
                        removeMovieByIdData(id);
                        return closeDeleteMovieModal(false)
                    }}>Confirm</button>
                </div>
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
        removeMovieByIdData: id => dispatch(removeMovieByIdData(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMovie);