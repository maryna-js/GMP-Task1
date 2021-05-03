import React from "react";
import { connect } from 'react-redux';
import { getMovieByIdData } from "../../actions/movies";
import './index.scss';
import Image404 from '../../assets/images/404.png';


function ErrorPage(props) {


    return (
        <div className="wrapper-details">
            <img src={Image404} alt="" />
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

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
// export default MovieDetails;