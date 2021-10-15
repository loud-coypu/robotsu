import React from 'react';
import './country.css';

const Country = ({stats}) => {
    const imgSrc = stats.Code && stats.Code !== "zz" ? `https://www.countryflags.io/${stats.Code}/flat/64.png` : "img/64.png";
    return(
        <div className="country">
            <img src={imgSrc} alt={stats.Code}></img>
            <h2>{stats.Country}</h2>
            <div className="stats">
                <p>{`Population : ${stats.Population}`}</p>
                <p>{`Confirmed : ${stats.Confirmed}`}</p>
                <p>{`Deaths : ${stats.Deaths}`}</p>
                <p>{`Recovered : ${stats.Recovered}`}</p>
            </div>
        </div>
    )
}

export default Country;