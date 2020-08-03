import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { getImage } from '@/utilities/firebase';
import { connect } from 'react-redux';
import { ThumbnailLoader, TextLoader } from '@/components/loaders';
import { AttendeeList } from './attendee-list';

const Event = memo((props) => {
  const {
    id, thumbnail, alt, date, title, groupName, attendees, loading,
  } = props;

  const [imageUrl, setImageUrl] = useState('');
  const [didLoad, setDidLoad] = useState(false);

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
        <img src={imageUrl} loading="lazy" alt={alt} onLoad={() => setDidLoad(true)} />
        {
          !didLoad || loading
            ? <ThumbnailLoader /> : ''
        }
      </div>
      <div className="app-event-content">
        {
          loading || !date
            ? <TextLoader />
            : <p className="date">{date}</p>
        }
        {
          loading || !title
            ? <TextLoader />
            : <p className="title">{title}</p>
        }
        {
          loading || !groupName
            ? <TextLoader style={{ height: '13px' }} />
            : <p className="group-name">{groupName}</p>
        }
        <AttendeeList attendees={attendees} />
      </div>
    </article>
  );
});

Event.propTypes = {
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  attendees: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    loading: state.event.loading,
  };
};

export default connect(mapStateToProps)(Event);
