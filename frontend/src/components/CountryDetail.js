import React from 'react';

const CountryDetail = ({ country }) => {
  return (
    <div className="country-detail">
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Subregion:</strong> {country.subregion}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
    </div>
  );
};

export default CountryDetail;
