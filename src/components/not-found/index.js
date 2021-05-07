import React from "react";
import { connect } from 'react-redux';
import { getMovieByIdData } from "../../actions/movies";
// import './index.scss';
// import Image404 from '../../assets/images/404.png';


function NotFoundPage(props) {


    return (
        <div className="not-found-wrapper">
            <p className="not-found-text">No movies found</p>
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
        getMovieByIdData: id => dispatch(getMovieByIdData(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundPage);
// export default MovieDetails;