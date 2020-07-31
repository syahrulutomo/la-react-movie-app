import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getImage } from '@/utilities/firebase';
import { connect } from 'react-redux';
import { AvatarLoader } from '../loaders';

const Attendee = (props) => {
  const { src, alt, loading } = props;

  const [imageUrl, setImageUrl] = useState('');
  const [didLoad, setDidLoad] = useState(false);

  const getImageUrl = async (img) => {
    const url = await getImage('avatar', img);
    setImageUrl(url);
  };

  useEffect(() => {
    if (src) getImageUrl(src);
  }, [src]);

  const style = didLoad ? {} : { visibility: 'hidden' };
  return (
    <div className="attendee">
      {
        loading || !src
          ? <AvatarLoader />
          : <img src={imageUrl} loading="lazy" alt={alt} style={style} onLoad={() => setDidLoad(true)} />
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
