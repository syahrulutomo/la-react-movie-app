import React from 'react';
import PropTypes from 'prop-types';

export function ContainerDefault({ children }) {
  return <div className="app-container--default">{children}</div>;
}

ContainerDefault.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
