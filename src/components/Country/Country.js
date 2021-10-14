import React from 'react';
import './country.css';

const Country = (props) => {
    const c = props.stats;
    const imgSrc = c.Code && c.Code !== "zz" ? `https://www.countryflags.io/${c.Code}/flat/64.png` : "img/64.png";
    return(
        <div className="country">
            <img src={imgSrc} alt={c.Code}></img>
            <h2>{c.Country}</h2>
            <div className="stats">
                <p>{`Population : ${c.Population}`}</p>
                <p>{`Confirmed : ${c.Confirmed}`}</p>
                <p>{`Deaths : ${c.Deaths}`}</p>
                <p>{`Recovered : ${c.Recovered}`}</p>
            </div>
        </div>
    )
}

export default Country;