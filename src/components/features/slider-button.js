import React from 'react';
import PropTypes from 'prop-types';

export const SliderButton = (props) => {
  const {
    img, alt, type, handleClick,
  } = props;

  const className = type === 'prev' ? 'slider-button slider-button--prev' : type === 'next' ? 'slider-button slider-button--next' : '';

  return (
    <div className={className} onClick={handleClick}>
      <img src={img} alt={alt} />
    </div>
  );
};

SliderButton.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
