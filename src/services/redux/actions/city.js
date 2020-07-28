import axios from '@/services/libs/axios';
import * as actionTypes from './action-types';

export const getCityListStart = () => {
  return {
    type: actionTypes.GET_CITY_LIST_START,
  };
};

export const getCityListSuccess = (cities) => {
  return {
    type: actionTypes.GET_CITY_LIST_SUCCESS,
    cities,
  };
};

export const getCityListFail = (error) => {
  return {
    type: actionTypes.GET_CITY_LIST_FAIL,
    error,
  };
};

export const fetchCityList = () => {
  return async (dispatch) => {
    dispatch(getCityListStart());
    try {
      const cities = await axios.get('/cities');
      dispatch(getCityListSuccess(cities.data));
    } catch (error) {
      dispatch(getCityListFail(error));
    }
  };
};

export const selectCity = (city) => {
  return {
    type: actionTypes.SELECT_CITY,
    city,
  };
};

export const searchCityStart = () => {
  return {
    type: actionTypes.SEARCH_CITY_START,
  };
};

export const searchCitySuccess = (cities) => {
  return {
    type: actionTypes.SEARCH_CITY_SUCCESS,
    cities,
  };
};

export const searchCityFail = (error) => {
  return {
    type: actionTypes.SEARCH_CITY_FAIL,
    error,
  };
};

export const searchCity = (text) => {
  return async (dispatch) => {
    dispatch(searchCityStart());
    try {
      const cities = await axios.get(`/cities/find/${text}`);
      dispatch(searchCitySuccess(cities.data));
    } catch (error) {
      dispatch(searchCityFail(error));
    }
  };
};

export const findNearestCityStart = () => {
  return {
    type: actionTypes.FIND_NEAREST_CITY_START,
  };
};

export const findNearestCitySuccess = (cities) => {
  return {
    type: actionTypes.FIND_NEAREST_CITY_SUCCESS,
    cities,
  };
};

export const findNearestCityFail = (error) => {
  return {
    type: actionTypes.FIND_NEAREST_CITY_FAIL,
    error,
  };
};

export const findNearestCity = (lat, long) => {
  return async (dispatch) => {
    dispatch(findNearestCityStart());
    try {
      const cities = await axios.get(`/cities/find/nearest/${lat}/${long}`);
      dispatch(findNearestCitySuccess(cities.data));
    } catch (error) {
      dispatch(findNearestCityFail(error));
    }
  };
};
