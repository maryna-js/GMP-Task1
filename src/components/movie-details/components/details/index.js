import React from "react";
// import NoImage from '../../../../assets/images/no-image.png';
// import './index.scss';

function Details(props) {
    const { budget,
        genres,
        id,
        overview,
        poster_path,
        release_date,
        revenue,
        runtime,
        tagline,
        title,
        vote_average,
        vote_count } = props.movieDetails;
    return (
        <div className="container-details">
            <div className="container-image">
                {/* <img src={poster_path} alt="" width="300px" /> */}No image
            </div>
            <div className="container-description">
                <div className="container-name">
                    <h3>{title}</h3>
                    <div className="container-rating">{vote_average}</div>
                </div>
                <div className="container-name">
                    <span className="container-duration">{release_date}</span>
                    <span className="container-duration">{runtime} min</span>
                </div>
                <div className="container-description">
                    {overview}
                </div>
            </div>
        </div>
    );
}
export default Details;