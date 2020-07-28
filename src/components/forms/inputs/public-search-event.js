import React, { useState } from 'react';
import PropTypes from 'prop-types';
import searchGlass from '@/assets/images/search-black-18dp.svg';
import { connect } from 'react-redux';
import { selectEvent } from '@/services/redux/actions/event';

const PublicSearchEvent = (props) => {
  const { onSelectEvent } = props;

  const [event, setEvent] = useState('');

  const handleChange = (e) => {
    setEvent(e.target.value);
    onSelectEvent(e.target.value);
  };

  return (
    <input
      id="public-search-event"
      type="text"
      name="public-search-event"
      placeholder="Find your next event"
      value={event}
      onChange={handleChange}
      style={{ backgroundImage: `url(${searchGlass})` }}
    />
  );
};

PublicSearchEvent.propTypes = {
  onSelectEvent: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectEvent: (selected) => dispatch(selectEvent(selected)),
  };
};

export default connect(null, mapDispatchToProps)(PublicSearchEvent);
