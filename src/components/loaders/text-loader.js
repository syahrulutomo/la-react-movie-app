import React from 'react';
import PropTypes from 'prop-types';

export const TextLoader = (props) => {
  const { customStyle } = props;

  return (
    <>
      {
      customStyle
        ? (
          <div className="text-loader" style={customStyle}>
          </div>
        )
        : (
          <div className="text-loader">
          </div>
        )
    }
    </>
  );
};

TextLoader.propTypes = {
  customStyle: PropTypes.object,
};
