import React from 'react';

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries?.map((country) => (
        <div key={country.cca3} className="country-card">
          <img src={country.flags.svg} alt={`${country.name.common} flag`} />
          <h3>{country.name.common}</h3>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Region: {country.region}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
