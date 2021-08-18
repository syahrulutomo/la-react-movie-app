import * as actionTypes from './action-types'

export const getSearchedListStart = () => {
  return {
    type: actionTypes.GET_SEARCH_LIST_START,
  }
}

export const getSearchedListSuccess = (searched) => {
  return {
    type: actionTypes.GET_SEARCH_LIST_SUCCESS,
    searched,
  }
}

export const getSearchedListFail = (error) => {
  return {
    type: actionTypes.GET_SEARCH_LIST_FAIL,
    error,
  }
}

export const setSearchedText = (text) => {
  return {
    type: actionTypes.SET_SEARCH_TEXT,
    text,
  }
}

export const showAutoComplete = (show) => {
  return {
    type: actionTypes.SHOW_AUTOCOMPLETE,
    show,
  }
}

export const fetchSearchList = (string, movies) => {
  return (dispatch) => {
    dispatch(getSearchedListStart())
    try {
      const filtered = movies.filter((movie) => movie.title.toLowerCase().includes(string.toLowerCase()));
      dispatch(getSearchedListSuccess(filtered))
    } catch (error) {
      dispatch(getSearchedListFail(error))
    }
  }
}
