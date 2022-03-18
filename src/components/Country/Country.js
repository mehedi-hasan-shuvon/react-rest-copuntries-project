import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='countryDiv'>
            <img src={props.flag} alt="" />
            <h1>{props.name}</h1>
            <h3>City: {props.capital}</h3>
            <h4 style={{'color':'blue'}}>Region: {props.region}</h4>
            <p>Population: <span style={{ 'color': 'red' }}>{props.population}</span> </p>
            <p><small>Area: {props.area}</small></p>
            <img width={'100px'} src={props.country.coatOfArms.png} alt="" />
        </div>
    );
};

export default Country;