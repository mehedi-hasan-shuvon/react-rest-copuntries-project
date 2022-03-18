import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountires></LoadCountires>
    </div>
  );
}



function LoadCountires() {
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
      
    </div>
  );
}

export default App;
