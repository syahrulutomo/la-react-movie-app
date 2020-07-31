import React from 'react';
import PropTypes from 'prop-types';

export const AvatarLoader = (props) => {
  const customStyle = { props };

  return (
    <>
      {
      customStyle
        ? (<div className="avatar-loader" style={customStyle}></div>)
        : (<div className="avatar-loader"></div>)
    }
    </>
  );
};

AvatarLoader.propTypes = {
  customStyle: PropTypes.object,
};
