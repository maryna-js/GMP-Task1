import React from "react";
import PropTypes from 'prop-types';
import ItemResult from '../item-result';
import './index.scss';

function ItemsList({ data }) {
    return (
        <div className="items-results-container">
            {data.map((item) => <ItemResult key={item.id} name={item.name} genre={item.genre} year={item.year} />)}
        </div>
    );
}
export default ItemsList;

ItemsList.propTypes = {
    data: PropTypes.array,
};