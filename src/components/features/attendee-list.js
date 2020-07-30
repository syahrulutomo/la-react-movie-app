import React from 'react';
import PropTypes from 'prop-types';
import Attendee from './attendee';

const AttendeeList = (props) => {
  const { attendees } = props;

  let mappedAttendees = attendees.map((a) => {
    return (
      <Attendee key={a._id} src={a.photos[a.photos.length - 1]} alt={a.name} />
    );
  });

  if (mappedAttendees.length > 3) {
    mappedAttendees = mappedAttendees.slice(0, 3);
  }

  return (
    <div className="attendee-list">
      {mappedAttendees}
      <span className="attendee-total">{attendees.length}</span>
    </div>
  );
};

AttendeeList.propTypes = {
  attendees: PropTypes.array.isRequired,
};

export default AttendeeList;
