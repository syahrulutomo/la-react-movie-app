import React from 'react';
import PropTypes from 'prop-types';


export const PublicSearchCity = (props) => {
  const { value, handleChange } = props;

  return (
    <input
      id="public-search-city"
      type="text"
      name="public-search-city"
      value={value}
      onChange={handleChange}
    />
  );
};


PublicSearchCity.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
