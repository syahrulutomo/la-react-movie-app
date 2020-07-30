import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getImage } from '@/utilities/firebase';

const Attendee = (props) => {
  const { src, alt } = props;

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
      <img src={imageUrl} alt={alt} />
    </div>
  );
};

Attendee.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Attendee;
