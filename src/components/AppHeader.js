import React from 'react';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ handleClick }) => (
    <header className="header-container">
        <h2>Weather app</h2>
        <span className="material-icons" onClick={(e) => handleClick(true)}>
            &#xef3a;
        </span>
    </header>
);