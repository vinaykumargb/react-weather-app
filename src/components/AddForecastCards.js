import React from 'react';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ data, icons, timezone }) =>
    data ? (
        <ul>
            {data.map((obj, i) => {
                const time = new Date(obj.dt * 1000);
                return (
                    <li key={i}>
                        <span>{time.toLocaleString([], { hour: "2-digit", minute: "2-digit", timeZone: timezone})}</span>
                        <i className={"wi " + icons[obj.weather[0].icon]}></i>
                        <span>{obj.weather[0].description}</span>
                        <span>{Math.floor(obj.temp) + "°c"}</span>
                    </li>
                );
            })}
        </ul>
    ) : null;
