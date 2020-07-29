import React from 'react';
import PropTypes from 'prop-types';

export const PublicSearchEventButton = (props) => {
  const { text, handleClick } = props;

  return (
    <div className="public-search-event-btn-container">
      <button type="button" className="public-search-event-btn" onClick={handleClick}>
        { text }
      </button>
    </div>
  );
};

PublicSearchEventButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PublicSearchEventButton;
