import React from 'react';
import PropTypes from 'prop-types';
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

CityList.propTypes = {
  cities: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }),
};

export default CityList;
