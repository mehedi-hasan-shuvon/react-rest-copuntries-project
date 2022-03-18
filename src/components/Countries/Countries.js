import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <div >
            <h1>Hello from Countries: {countries.length}</h1>
            <div className='countries-div'>
                {
                    countries.map(country => <Country
                        name={country.name.common}
                        capital={country.capital}
                        population={country.population}
                        flag={country.flags.png}
                        area={country.area}
                        region={country.region}
                        country={country}
                    ></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;