import { updateObject } from '@/utilities';
import * as actionTypes from '../actions/action-types';

const initialState = {
  events: [],
  selected: '',
  loading: false,
};

const getEventListStart = (state) => {
  return updateObject(state, { loading: true });
};

const getEventListSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    events: action.events,
  });
};

const getEventListFail = (state) => {
  return updateObject(state, { loading: false });
};

const getNearestEventListStart = (state) => {
  return updateObject(state, { loading: true });
};

const getNearestEventListSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    events: action.events,
  });
};

const getNearestEventListFail = (state) => {
  return updateObject(state, { loading: false });
};

const selectEvent = (state, action) => {
  return updateObject(state, {
    loading: false,
    selected: action.event,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_EVENT_LIST_START: return getEventListStart(state, action);
    case actionTypes.GET_EVENT_LIST_SUCCESS: return getEventListSuccess(state, action);
    case actionTypes.GET_EVENT_LIST_FAIL: return getEventListFail(state, action);
    case actionTypes.GET_NEAREST_EVENT_LIST_START: return getNearestEventListStart(state, action);
    case actionTypes.GET_NEAREST_EVENT_LIST_SUCCESS: return getNearestEventListSuccess(state, action);
    case actionTypes.GET_NEAREST_EVENT_LIST_FAIL: return getNearestEventListFail(state, action);
    case actionTypes.SELECT_EVENT: return selectEvent(state, action);
    default: return state;
  }
};

export default reducer;
