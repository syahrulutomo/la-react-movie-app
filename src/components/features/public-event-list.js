import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNearestEventList } from '@/services/redux/actions/event';
import { Event } from './event';

const PublicEventList = (props) => {
  const {
    events, nearestCity, selectedCity, searchedCity, onFetchNearestEventList,
  } = props;
  const [mappedEvents, setMappedEvents] = useState([]);

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  useEffect(() => {
    const evts = events.map((e) => {
      const formattedDate = moment(e.date).format('MMM DD');
      const day = moment(formattedDate).day();
      return (
        <li key={e._id}>
          <Event
            id={e._id}
            thumbnail={e.photos[e.photos.length - 1]}
            alt={e.title}
            date={`${daysOfWeek[day]}, ${formattedDate.toLocaleUpperCase()}`}
            title={e.title}
            groupName={e.groupHost.name}
            attendees={e.attendees}
          />
        </li>
      );
    });
    setMappedEvents(evts);
  }, [events]);

  useEffect(() => {
    if (selectedCity._id !== undefined) {
      onFetchNearestEventList(selectedCity.location.coordinates[1], selectedCity.location.coordinates[0]);
    } else if (nearestCity.length > 0) {
      onFetchNearestEventList(nearestCity[0].location.coordinates[1], nearestCity[0].location.coordinates[0]);
    }
  }, [searchedCity, selectedCity]);

  const city = (nearestCity.length > 0 ? ` ${nearestCity[0].name}, ${nearestCity[0].countryAbbr}` : 'you')
              || selectedCity.name;

  return (
    <div className="app-event-list">
      <div style={{ overflow: 'hidden' }}>
        <p className="app-event-list--title">
          Event near
          {` ${city}`}
        </p>
        <div className="app-event-list--content">
          <ul>
            {mappedEvents || ''}
          </ul>
        </div>
      </div>
    </div>
  );
};

PublicEventList.propTypes = {
  events: PropTypes.array,
  nearestCity: PropTypes.array,
  selectedCity: PropTypes.object,
  searchedCity: PropTypes.array,
  onFetchNearestEventList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    nearestCity: state.city.nearest,
    events: state.event.events,
    selectedCity: state.city.selected,
    searchedCity: state.city.searchedCities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchNearestEventList: (latitude, longitude) => dispatch(fetchNearestEventList(latitude, longitude)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicEventList);
