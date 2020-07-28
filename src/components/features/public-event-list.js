import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Event } from './event';

const PublicEventList = (props) => {
  const { events, nearest } = props;
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

  const city = nearest.length > 0 ? ` ${nearest[0].name}, ${nearest[0].countryAbbr}` : '';

  return (
    <div className="app-event-list">
      <div style={{ overflow: 'hidden' }}>
        <p className="app-event-list--title">
          Event near
          { city }
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
  events: PropTypes.array.isRequired,
  nearest: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    nearest: state.city.nearest,
    events: state.event.events,
  };
};

export default connect(mapStateToProps)(PublicEventList);
