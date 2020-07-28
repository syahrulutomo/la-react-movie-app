import { updateObject } from '@/utilities';
import * as actionTypes from '../actions/action-types';

const initialState = {
  cities: [],
  selected: '',
  searchedCities: [],
  loading: false,
  nearest: [],
};

const getCityListStart = (state) => {
  return updateObject(state, { loading: true });
};

const getCityListSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    cities: action.cities,
  });
};

const getCityListFail = (state) => {
  return updateObject(state, { loading: false });
};

const selectCity = (state, action) => {
  return updateObject(state, {
    loading: false,
    selected: action.city,
  });
};

const searchCityStart = (state) => {
  return updateObject(state, { loading: true });
};

const searchCitySuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    searchedCities: action.cities,
  });
};

const searchCityFail = (state) => {
  return updateObject(state, { loading: false });
};

const findNearestCityStart = (state) => {
  return updateObject(state, { loading: true });
};

const findNearestCitySuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    nearest: action.cities,
  });
};

const findNearestCityFail = (state) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CITY_LIST_START: return getCityListStart(state, action);
    case actionTypes.GET_CITY_LIST_SUCCESS: return getCityListSuccess(state, action);
    case actionTypes.GET_CITY_LIST_FAIL: return getCityListFail(state, action);
    case actionTypes.SELECT_CITY: return selectCity(state, action);
    case actionTypes.SEARCH_CITY_START: return searchCityStart(state, action);
    case actionTypes.SEARCH_CITY_SUCCESS: return searchCitySuccess(state, action);
    case actionTypes.SEARCH_CITY_FAIL: return searchCityFail(state, action);
    case actionTypes.FIND_NEAREST_CITY_START: return findNearestCityStart(state, action);
    case actionTypes.FIND_NEAREST_CITY_SUCCESS: return findNearestCitySuccess(state, action);
    case actionTypes.FIND_NEAREST_CITY_FAIL: return findNearestCityFail(state, action);
    default: return state;
  }
};

export default reducer;
