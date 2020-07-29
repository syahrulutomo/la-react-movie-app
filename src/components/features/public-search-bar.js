import React from 'react';
import PropTypes from 'prop-types';
import { searchEvent } from '@/services/redux/actions/event';
import { connect } from 'react-redux';
import { PublicSearchEventButton } from '../forms';
import PublicSearchEvent from '../forms/inputs/public-search-event';
import PublicSearchCity from '../forms/inputs/public-search-city';

const PublicSearchBar = (props) => {
  const { onSearchEvent, selectedCity, event } = props;

  const handleClick = () => {
    const evt = event === '' ? null : event;
    onSearchEvent(evt, selectedCity.location.coordinates[1], selectedCity.location.coordinates[0]);
  };

  return (
    <div className="public-search-bar">
      <PublicSearchEvent />
      <PublicSearchCity />
      <PublicSearchEventButton text="Search" handleClick={handleClick} />
    </div>
  );
};

PublicSearchBar.propTypes = {
  onSearchEvent: PropTypes.func,
  selectedCity: PropTypes.object,
  event: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    selectedCity: state.city.selected,
    event: state.event.selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchEvent: (name, latitude, longitude) => dispatch(searchEvent(name, latitude, longitude)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicSearchBar);
