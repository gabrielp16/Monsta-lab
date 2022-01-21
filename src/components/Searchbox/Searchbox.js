import React from "react";
import PropTypes from 'prop-types';
import './Searchbox.scss'

const Searchbox = (props) => {
    return (
        <div className="searchbox">
            <input
                value={props.value}
                placeholder="Search a movie"
                onChange={(event) => props.setSearch(event.target.value)}
            ></input>
        </div>
    );
};

Searchbox.propTypes = {
    value: PropTypes.string
};

export default Searchbox;