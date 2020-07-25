import React from 'react';
import PropTypes from 'prop-types';


export const PublicSearchEvent = (props) => {
  const { value, handleChange } = props;

  return (
    <input
      id="public-search-event"
      type="text"
      name="public-search-event"
      value={value}
      onChange={handleChange}
    />
  );
};


PublicSearchEvent.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
