import React from "react";
import PropTypes from 'prop-types';
import {
    Link
} from "react-router-dom";
import MenuDropdown from '../dropdown-menu'
import NoImage from '../../../../assets/images/no-image.png';
import './index.scss';

function ItemResult(props) {
    const { id, name, genre, year, showEditMovieModal, showDeleteMovieModal } = props;
    return (
        <div className="item-result">
            <Link to="./movie-details"><img src={NoImage} alt="" width="100%" /></Link>
            <div className="item-description">
                <div className="item-name"><Link to="/movie-details" className="item-link">{name}</Link></div>
                <div className="item-year">{year}</div>
            </div>
            <div className="item-genre">
                {genre}
            </div>
            <div className="item-menu">
                <MenuDropdown showEditMovieModal={showEditMovieModal} showDeleteMovieModal={showDeleteMovieModal} id={id} />
            </div>
        </div>
    );
}
export default ItemResult;

ItemResult.propTypes = {
    name: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
};