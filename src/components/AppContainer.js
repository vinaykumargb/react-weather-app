import React, { useEffect, useState } from 'react';
import useFetch from '../custom_hooks/useFetch.js'
import LoaderPage from './LoaderPage.js';
import ErrorPage from './ErrorPage.js';
import AppHeader from './AppHeader.js';
import CurrentWeather from './CurrentWeather.js';
import WeatherDetails from './WeatherDetails.js';
import ForecastData from './ForecastData.js';

export default function AppContainer({ Loc, popup, changeLoc, icons, setLoc }) {
    const { loading, data, err } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${Loc}&units=metric&appid=d441baed8246aee90a4a18b5d1f76fed`);
    const [coord, setCoord] = useState({ lon: undefined, lat: undefined });
    useEffect(() => {
        if (data) {
            setCoord({
                lon: data.coord.lon,
                lat: data.coord.lat,
            });
        }
    }, [data]);
    if (loading) return <LoaderPage />;
    if (err.code) {
        return <ErrorPage setLoc={setLoc} setPop={changeLoc} errCode={err.code} errMsg={err.msg} />;
    }
    
    return (
        <main
            className="app-container"
            style={
                popup
                    ? {}
                    : {
                          filter: "none",
                          pointerEvents: "auto",
                      }
            }
        >
            <AppHeader handleClick={changeLoc} />
            <CurrentWeather currData={data} icons={icons} />
            <WeatherDetails data={data} />
            <ForecastData coord={coord} icons={icons} />
        </main>
    );
};