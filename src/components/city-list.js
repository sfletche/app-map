import React from 'react';
import { getOpacity } from '../helpers';

function CityList({ cities }) {
  const orderedCities = cities.reverse();
  return (
    <div>
      {orderedCities.map(city => (
        <p key={city.name} style={{opacity: getOpacity(city.age)}}>
          {city.name}
        </p>
      ))}
    </div>
  )
}

export default CityList;
