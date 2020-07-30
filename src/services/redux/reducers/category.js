import { updateObject } from '@/utilities';
import * as actionTypes from '../actions/action-types';

const initialState = {
  categories: [],
  loading: false,
};

const getCategoryListStart = (state) => {
  return updateObject(state, { loading: true });
};

const getCategoryListSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    categories: action.categories,
  });
};

const getCategoryListFail = (state) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY_LIST_START: return getCategoryListStart(state, action);
    case actionTypes.GET_CATEGORY_LIST_SUCCESS: return getCategoryListSuccess(state, action);
    case actionTypes.GET_CATEGORY_LIST_FAIL: return getCategoryListFail(state, action);
    default: return state;
  }
};

export default reducer;
