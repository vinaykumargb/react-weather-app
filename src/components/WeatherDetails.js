import React from 'react';

export default function WeatherDetails({ data }) {
    const degToDir = (deg) => {
        return ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"][Math.round(deg / 22.5 + 1)];
    };

    return (
        <section className="weather-details">
            <h3>Current weather details</h3>
            <div className="current-weather-data">
                <span>
                    <i className="fas fa-temperature-low"></i>&nbsp;Feels like:
                    <br /> {data.main.feels_like}°c
                </span>
                <span>
                    <i className="fas fa-eye"></i>&nbsp;Visibility:
                    <br /> {data.visibility / 1000}km
                </span>
                <span>
                    <i className="fas fa-wind"></i>&nbsp;Wind:
                    <br /> {data.wind.speed}m/s <span style={{ fontSize: "0.8em" }}>{degToDir(data.wind.deg)}</span>
                </span>
                <span>
                    <i className="fas fa-cloud"></i>&nbsp;Clouds:
                    <br /> {data.clouds.all}%
                </span>
            </div>
        </section>
    );
};