import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='countryDiv'>
            <img src={props.flag} alt="" />
            <h1>{props.name}</h1>
            <h3>City: {props.capital}</h3>
            <p>Population: <span style={{ 'color': 'red' }}>{props.population}</span> </p>
            <p><small>Area:{props.area}</small></p>
        </div>
    );
};

export default Country;