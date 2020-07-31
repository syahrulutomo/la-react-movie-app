import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getImage } from '@/utilities/firebase';
import { connect } from 'react-redux';
import { AvatarLoader } from '../loaders';

const Attendee = (props) => {
  const { src, alt, loading } = props;

  const [imageUrl, setImageUrl] = useState('');

  const getImageUrl = async (img) => {
    const url = await getImage('avatar', img);
    setImageUrl(url);
  };

  useEffect(() => {
    if (src) getImageUrl(src);
  }, [src]);

  return (
    <div className="attendee">
      {
        loading || !src
          ? <AvatarLoader />
          : <img src={imageUrl} alt={alt} />
      }
    </div>
  );
};

Attendee.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    loading: state.event.loading,
  };
};

export default connect(mapStateToProps)(Attendee);
