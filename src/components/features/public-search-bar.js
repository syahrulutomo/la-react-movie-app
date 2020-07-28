import React from 'react';
import { PublicSearchEventButton } from '../forms';
import PublicSearchEvent from '../forms/inputs/public-search-event';
import PublicSearchCity from '../forms/inputs/public-search-city';

export const PublicSearchBar = () => {
  return (
    <div className="public-search-bar">
      <PublicSearchEvent />
      <PublicSearchCity />
      <PublicSearchEventButton text="Search" />
    </div>
  );
};
