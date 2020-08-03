import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getImage } from '@/utilities/firebase';

export const Category = ({
  id, thumbnail, alt, title,
}) => {
  const [imageUrl, setImageUrl] = useState('');

  const getImageUrl = async (img) => {
    const url = await getImage('category', img);
    setImageUrl(url);
  };

  useEffect(() => {
    if (thumbnail) getImageUrl(thumbnail);
  }, [thumbnail]);

  return (
    <div className="category" key={id}>
      <div className="category-thumbnail">
        <img loading="lazy" src={imageUrl} alt={alt} />
      </div>
      <div className="category-content">
        <p className="category-content--title">{title}</p>
      </div>
    </div>
  );
};

Category.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};
