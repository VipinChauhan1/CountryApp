// src/components/CountryCard.js
import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div>
      <h3>{country.name.common}</h3>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} width="50" />
      <p>Population: {country.population}</p>
    </div>
  );
};

export default CountryCard;
