import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import location from '@/assets/images/location.svg';
import { connect } from 'react-redux';
import { selectCity, searchCity, findNearestCity } from '@/services/redux/actions/city';

const PublicSearchCity = (props) => {
  const {
    onSelectCity, nearest, onFindNearestCity, onSearchCity, searched,
  } = props;

  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setIsOpen(true);
    setCity(e.target.value);
    onSearchCity(e.target.value);
  };

  const handleClick = (e) => {
    setCity(e.target.innerHTML);
    let text = e.target.innerHTML;
    text = text.split(',');
    if (searched) {
      const c = searched.filter((s) => s.name === text[0]);
      if (c.length > 0) onSelectCity(c[0]);
      setTemp('');
    }

    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  };

  const handleFocus = () => {
    setTemp(city);
    setCity('');
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      setCity(temp);
    }
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
      .then(() => {
        if (position.latitude && position.longitude) {
          const ac = new AbortController();
          try {
            onFindNearestCity(position.latitude, position.longitude);
          } catch (err) {
            if (err) ac.abort();
          }
        }
      });
  }, [position.latitude, position.longitude]);

  useEffect(() => {
    if (nearest.length > 0) {
      const ac = new AbortController();
      setCity(`${nearest[0].name}, ${nearest[0].countryAbbr}`);
      try {
        onSelectCity(nearest[0]);
      } catch (err) {
        if (err) ac.abort();
      }
    }
  }, [nearest]);

  const searchedList = searched.map((s) => {
    return (
      <li className="list-item" key={s._id}>
        <p style={{ margin: 0, width: '100%' }} onClick={handleClick}>
          {`${s.name}`}
          ,
          {` ${s.countryAbbr}`}
        </p>
      </li>
    );
  });

  return (
    <div>
      <input
        id="public-search-city"
        type="text"
        name="public-search-city"
        value={city}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        style={{ backgroundImage: `url(${location})` }}
      />
      {
        isOpen ? (
          <div className="public-search-city-popup">
            <ul className="list">
              {searchedList}
            </ul>
          </div>
        ) : ''
      }
    </div>
  );
};

PublicSearchCity.propTypes = {
  onSelectCity: PropTypes.func.isRequired,
  nearest: PropTypes.array,
  searched: PropTypes.array,
  selected: PropTypes.object,
  onSearchCity: PropTypes.func,
  onFindNearestCity: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    nearest: state.city.nearest,
    searched: state.city.searchedCities,
    selected: state.city.selected,
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
