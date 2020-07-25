import React from 'react';
import PropTypes from 'prop-types';

export const PublicSearchEventButton = (props) => {
  const { text } = props;

  return (
    <div className="public-search-event-btn-container">
      <button className="public-search-event-btn">
        { text }
      </button>
    </div>
  );
};


PublicSearchEventButton.propTypes = {
  text: PropTypes.string.isRequired
};


export default PublicSearchEventButton;
