import React from "react";
import PropTypes from 'prop-types';
import ItemResult from '../item-result';
import './index.scss';

function ItemsList({ data, showEditMovieModal, showDeleteMovieModal }) {
    return (
        <div className="items-results-container">
            {data && data.map((item) => <ItemResult key={item.id} id={item.id} name={item.title} genre={item.genres} year={item.release_date} image={item.poster_path} showEditMovieModal={showEditMovieModal} showDeleteMovieModal={showDeleteMovieModal} />)}
        </div>
    );
}
export default ItemsList;

ItemsList.propTypes = {
    data: PropTypes.array,
};