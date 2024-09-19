import React, { useState } from 'react';
import './App.css';
import CountrySearch from './components/CountrySearch';
import CountryList from './components/CountryList';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define the onSearch function that will be passed to CountrySearch component
  const onSearch = async (name) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(`/api/countries?name=${name}`);
      setCountries(response.data);
    } catch (err) {
      setError('Country not found or an error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="app-title">Country Info Application</h1>
        {/* Pass the onSearch function as a prop */}
        <CountrySearch onSearch={onSearch} />
        {/* Render loading spinner, error, or country list */}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {countries.length > 0 && <CountryList countries={countries} />}
      </div>
    </div>
  );
}

export default App;
