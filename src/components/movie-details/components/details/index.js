import React from "react";
import NoImage from '../../../../assets/images/no-image.png';
import './index.scss';

function Details() {
    return (
        <div className="container-details">
            <div className="container-image">
                <img src={NoImage} alt="" width="300px" />
            </div>
            <div className="container-description">
                <div className="container-name">
                    <h3>Pulp Fiction</h3>
                    <div className="container-rating">4.2</div>
                </div>
                <div className="container-name">
                    <span className="container-duration">1994</span>
                    <span className="container-duration">154 min</span>
                </div>
                <div className="container-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </div>
            </div>
        </div>
    );
}
export default Details;