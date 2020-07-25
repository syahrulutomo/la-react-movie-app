import React from 'react';
import PropTypes from 'prop-types';
import { PublicSearchEvent, PublicSearchCity, PublicSearchEventButton } from '../forms';

export const PublicSearchBar = () => {

  const handleChange = (event) => {
    console.log(event);
  }

  return (
    <div className="public-search-bar">
      <PublicSearchEvent handleChange={handleChange} value="12345678"/>
      <PublicSearchCity handleChange={handleChange} value="Kudus"/>
      <PublicSearchEventButton text="Search"/>
    </div>
  );
};

PublicSearchBar.propTypes = {

};
