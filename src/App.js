import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <LoadCountires></LoadCountires> */}
      <Header></Header>
      <Country></Country>
      <Person></Person>


    </div>
  );
}



/* function LoadCountires() {
  const [countries, SetCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => SetCountries(data));
  }, [])

  return (
    <div>
      <h1>Visiting every countries of the world</h1>
      <h3>Avaiable Countries:{countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} capital={country.capital} population={country.population}></Country>)

      }

    </div>
  );
}


function Country(props) {
  return (
    <div className='country-div'>
      <h2>Name: {props.name}</h2>
      <h3>capital:{props.capital}</h3>
      <p style={{"color":"red"}}>Population:{props.population}</p>
    </div>
  );
} */

export default App;
