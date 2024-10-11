import React, { useEffect, useState } from 'react';

const CovidData = () => {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(data => setCovidData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Covid Cases by Country</h1>
      <ul>
        {covidData.map((country) => (
          <li key={country.country}>
            {country.country}: {country.cases}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CovidData;
