import React, { useEffect } from 'react';
import {
  PublicBanner, LayoutDefault, PublicSearchBar,
} from '@/components';
import PublicEventList from '@/components/features/public-event-list';
import { connect } from 'react-redux';
import { fetchNearestEventList } from '@/services/redux/actions/event';
import PropTypes from 'prop-types';

const HomeView = (props) => {
  const { onFetchNearestEventList } = props;

  useEffect(() => {
    onFetchNearestEventList();
  }, []);

  return (
    <LayoutDefault>
      <PublicBanner />
      <PublicSearchBar />
      <PublicEventList />
    </LayoutDefault>
  );
};

const mapStateToProps = (state) => {
  return {
    laoding: state.event.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchNearestEventList: () => dispatch(fetchNearestEventList('kudus')),
  };
};

HomeView.propTypes = {
  onFetchNearestEventList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
