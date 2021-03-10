import React from "react";
import PropTypes from 'prop-types';
import MenuDropdown from '../dropdown-menu'
import NoImage from '../../../../assets/images/no-image.png';
import './index.scss';

function ItemResult(props) {
    const { name, genre, year, showEditMovieModal, showDeleteMovieModal } = props;
    return (
        <div className="item-result">
            <img src={NoImage} alt="" width="100%" />
            <div className="item-description">
                <div className="item-name">{name}</div>
                <div className="item-year">{year}</div>
            </div>
            <div className="item-genre">
                {genre}
            </div>
            <div className="item-menu">
                <MenuDropdown showEditMovieModal={showEditMovieModal} showDeleteMovieModal={showDeleteMovieModal} />
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