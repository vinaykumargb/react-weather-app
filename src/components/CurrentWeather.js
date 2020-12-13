import React from 'react';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ currData, icons }) => (
    <div className="current-weather">
        <span className="addr">
            {currData.name}, {currData.sys.country}
        </span>
        <div className="temp-container">
            <i className={"wi " + icons[currData.weather[0].icon]}></i>
            <span className="real-temp">{Math.floor(currData.main.temp) + "°c"}</span>
        </div>
        <span className="weather-discription">{currData.weather[0].description}</span>
    </div>
);