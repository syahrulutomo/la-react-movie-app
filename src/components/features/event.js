import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getImage } from '@/utilities/firebase';
import AttendeeList from './attendee-list';

export const Event = (props) => {
  const {
    id, thumbnail, alt, date, title, groupName, attendees,
  } = props;

  const [imageUrl, setImageUrl] = useState('');

  const getImageUrl = async (img) => {
    const url = await getImage('events', img);
    setImageUrl(url);
  };

  useEffect(() => {
    if (thumbnail) getImageUrl(thumbnail);
  }, [thumbnail]);

  return (
    <article className="app-event" key={id}>
      <div className="app-event-thumbnail">
        <img src={imageUrl} alt={alt} />
      </div>
      <div className="app-event-content">
        <p className="date">{date}</p>
        <p className="title">{title}</p>
        <p className="group-name">{groupName}</p>
        <AttendeeList attendees={attendees} />
      </div>
    </article>
  );
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  attendees: PropTypes.array.isRequired,
};
