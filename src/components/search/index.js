import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import './index.scss';

function SearchPanel(props) {
    const [query, setQuery] = useState("");
    const history = useHistory();
    const searchQuery = props.match?.params.searchQuery
    if (searchQuery) {
        props.setSearchValue(searchQuery);
    }
    const searchByValue = () => {
        history.push(
            `/search/${query && query}`
        );
        props.setSearchValue(query);
    };
    return (
        <div className="wrapper-container">
            <h3 className="heading">Find your movie</h3>
            <div className="search-wrapper">
                <input className="search-input" placeholder="What do you want to watch?"
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }
                    } />
                <button onClick={searchByValue} className="search-button">Search</button>
            </div>
        </div>
    );
}
export default SearchPanel;