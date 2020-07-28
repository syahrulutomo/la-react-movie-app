import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBhYhP9crKXH-KgMUL-DwEBHfGonY6r5Ng',
  authDomain: 'meetup-clone-c61b7.firebaseapp.com',
  databaseURL: 'https://meetup-clone-c61b7.firebaseio.com',
  projectId: 'meetup-clone-c61b7',
  storageBucket: 'gs://meetup-clone-c61b7.appspot.com/',
  messagingSenderId: '204365400805',
});

export const Event = (props) => {
  const {
    id, thumbnail, alt, date, title, groupName, attendees,
  } = props;
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const getImage = async (fileName) => {
    // Points to the root reference
    const storageRef = app.storage().ref();
    // Points to 'images'
    const imagesRef = storageRef.child('events');
    // Points to 'images/space.jpg'
    // Note that you can use variables to create child values
    const spaceRef = imagesRef.child(fileName);

    const url = await spaceRef.getDownloadURL();
    setThumbnailUrl(url);
  };

  useEffect(() => {
    getImage(thumbnail);
  }, []);

  const attendeeList = attendees.map((a) => {
    return (
      <div key={a._id} className="attendees">
        <img src={a.img} alt={a.alt} />
      </div>
    );
  });

  return (
    <article className="app-event" key={id}>
      <div className="app-event-thumbnail">
        <img src={thumbnailUrl} alt={alt} />
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
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  attendees: PropTypes.array.isRequired,
};
