import React from 'react';
import PropTypes from 'prop-types';


export const Event = () => {
  const { thumbnail, alt, date, title, groupName, attendees } = props;

  const attendeeList = attendees.map(a => {
    return (
      <div className="attendees">
        <img src={a.img} alt={a.alt}/>
      </div>
    )
  })
  return (
    <article class="app-event">
      <div className="app-event-thumbnail">
        <img src={thumbnail} alt={alt}/>
      </div>
      <div className="app-event-content">
        <p className="date">{date}</p>
        <p className="title">{title}</p>
        <p className="group-name">{groupName}</p>
        <div className="attendees-container">
          {attendeeList}
          <p>{attendees.length}</p>
        </div>
      </div>
    </article>
  );
};


Event.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  attendees: PropTypes.array.isRequired
};
