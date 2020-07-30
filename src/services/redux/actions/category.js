import axios from '@/services/libs/axios';
import * as actionTypes from './action-types';

export const getCategoryListStart = () => {
  return {
    type: actionTypes.GET_CATEGORY_LIST_START,
  };
};

export const getCategoryListSuccess = (categories) => {
  return {
    type: actionTypes.GET_CATEGORY_LIST_SUCCESS,
    categories,
  };
};

export const getCategoryListFail = (error) => {
  return {
    type: actionTypes.GET_CATEGORY_LIST_FAIL,
    error,
  };
};

export const fetchCategoryList = () => {
  return async (dispatch) => {
    dispatch(getCategoryListStart());
    try {
      const categories = await axios.get('/categories');
      dispatch(getCategoryListSuccess(categories.data));
    } catch (error) {
      dispatch(getCategoryListFail(error));
    }
  };
};

export const fetchCategoryByName = (name) => {
  return async (dispatch) => {
    dispatch(getCategoryListStart());
    try {
      const categories = await axios.get(`/categories/find/${name}`);
      dispatch(getCategoryListSuccess(categories.data));
    } catch (error) {
      dispatch(getCategoryListFail(error));
    }
  };
};
