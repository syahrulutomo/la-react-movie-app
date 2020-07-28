import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import location from '@/assets/images/location.svg';
import { connect } from 'react-redux';
import { selectCity, searchCity, findNearestCity } from '@/services/redux/actions/city';

const PublicSearchCity = (props) => {
  const {
    onSelectCity, nearest, onFindNearestCity,
  } = props;

  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
    onSelectCity(e.target.value);
  };

  const [position, setPosition] = useState({ latitude: '', longitude: '' });
  const getPosition = async () => {
    await navigator.geolocation.getCurrentPosition(
      (pos) => setPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      }),
    );
  };

  useEffect(() => {
    getPosition()
      .then(onFindNearestCity(position.latitude, position.longitude));
  }, [position.latitude, position.longitude]);

  useEffect(() => {
    if (nearest.length > 0) setCity(nearest[0].name);
  }, [nearest]);

  return (
    <div>
      <input
        id="public-search-city"
        type="text"
        name="public-search-city"
        value={city}
        onChange={handleChange}
        style={{ backgroundImage: `url(${location})` }}
      />
    </div>
  );
};

PublicSearchCity.propTypes = {
  onSelectCity: PropTypes.func.isRequired,
  nearest: PropTypes.array,
  onSearchCity: PropTypes.func,
  onFindNearestCity: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    nearest: state.city.nearest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectCity: (city) => dispatch(selectCity(city)),
    onSearchCity: (text) => dispatch(searchCity(text)),
    onFindNearestCity: (lat, long) => dispatch(findNearestCity(lat, long)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicSearchCity);
