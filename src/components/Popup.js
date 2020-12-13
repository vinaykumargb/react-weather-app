import React from 'react';
import SearchBar from './SearchBar.js';
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ newLocation, show, onClose }) => (
    <div className="form-container" style={show ? { display: "block" } : { display: "none" }}>
        <SearchBar onNewLocation={newLocation} onClose={onClose} />
        <div className="search-options">
            <h4>Search By -</h4>
            <ul>
                <li>City name.</li>
                <li>City name, Country name/code.</li>
                <li>City name, State name.</li>
                <li>City name, State code, Country code.</li>
            </ul>
        </div>
    </div>
);