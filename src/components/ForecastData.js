import React, { useState, useEffect } from 'react';
import AddForecastCards from './AddForecastCards.js';

export default function ForecastData({ coord, icons }) {
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&exclude=minutely,daily,alerts&appid=d441baed8246aee90a4a18b5d1f76fed`;
    const [data, setData] = useState({forecast:[], timezone: ""});
    useEffect(() => {
        if (coord.lon) {
            fetch(api)
                .then((res) => res.json())
                .then((d) => setData({forecast:d.hourly.slice(0, 12), timezone:d.timezone}))
                .catch(console.error);
        }
    }, [coord, api]);
    return (
        <section className="forecast-data">
            <h3>Hourly forecast</h3>
            <AddForecastCards data={data.forecast} timezone={data.timezone} icons={icons} />
        </section>
    );
};