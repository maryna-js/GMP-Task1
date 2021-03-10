import React from "react";
import './index.scss';


export default class DeleteMovie extends React.Component {
    render() {
        if (!this.props.showDeleteMovie) {
            return null;
        }
        return (
            <div className="add-modal">
                <div className="add-modal-header">
                    <button className="add-modal-close" onClick={this.props.closeDeleteMovieModal}>X</button>
                </div>
                <div>
                    <h2 className="add-modal-heading">Delete movie</h2>
                </div>
                <div className="add-modal-container">
                    <p className="add-modal-text">
                        Are you sure you want to delete this movie?
                    </p>
                    <div className="add-modal-button-container">
                        <button className="add-modal-button-submit">Confirm</button>
                    </div>
                </div>
            </div>
        );
    }
}