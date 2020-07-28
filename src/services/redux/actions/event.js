import axios from '@/services/libs/axios';
import * as actionTypes from './action-types';

export const getEventListStart = () => {
  return {
    type: actionTypes.GET_EVENT_LIST_START,
  };
};

export const getEventListFail = (error) => {
  return {
    type: actionTypes.GET_EVENT_LIST_FAIL,
    error,
  };
};

export const getEventListSuccess = (events) => {
  return {
    type: actionTypes.GET_EVENT_LIST_SUCCESS,
    events,
  };
};

export const fetchEventList = () => {
  return async (dispatch) => {
    dispatch(getEventListStart());
    try {
      const events = await axios.get('/events');
      dispatch(getEventListSuccess(events.data));
    } catch (error) {
      dispatch(getEventListFail(error));
    }
  };
};

export const getNearestEventListStart = (origin) => {
  return {
    type: actionTypes.GET_NEAREST_EVENT_LIST_START,
    origin,
  };
};

export const getNearestEventListFail = (error) => {
  return {
    type: actionTypes.GET_NEAREST_EVENT_LIST_FAIL,
    error,
  };
};

export const getNearestEventListSuccess = (events) => {
  return {
    type: actionTypes.GET_NEAREST_EVENT_LIST_SUCCESS,
    events,
  };
};

export const fetchNearestEventList = (origin) => {
  return async (dispatch) => {
    dispatch(getNearestEventListStart(origin));
    try {
      const result = await axios.get(`/events/nearest/${origin}`);
      dispatch(getNearestEventListSuccess(result.data));
    } catch (error) {
      dispatch(getNearestEventListFail(error));
    }
  };
};

export const selectEvent = (event) => {
  return {
    type: actionTypes.SELECT_EVENT,
    event,
  };
};

export const searchEventStart = () => {
  return {
    type: actionTypes.SEARCH_EVENTS_START,
  };
};

export const searchEventSuccess = (events) => {
  return {
    type: actionTypes.SEARCH_EVENTS_SUCCESS,
    events,
  };
};

export const searchEventFail = (error) => {
  return {
    type: actionTypes.SEARCH_EVENTS_FAIL,
    error,
  };
};

export const searchEvent = (event) => {
  return async (dispatch) => {
    dispatch(searchEventStart());
    try {
      const events = await axios.get(`/events/${event}`);
      dispatch(searchEventSuccess(events));
    } catch (error) {
      dispatch(searchEventFail(error));
    }
  };
};
