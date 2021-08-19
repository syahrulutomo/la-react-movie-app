import { updateObject } from '@/utilities'
import * as actionTypes from '../actions/action-types'

const initialState = {
  movies: [],
  loading: false,
  details: {}
}

const getMovieListStart = (state) => {
  return updateObject(state, { loading: true })
}

const getMovieListSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    movies: action.movies,
  })
}

const getMovieListFail = (state) => {
  return updateObject(state, { loading: false })
}

const getMovieDetailsStart = (state) => {
  return updateObject(state, { loading: true })
}

const getMovieDetailsSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    details: action.details,
  })
}

const getMovieDetailsFail = (state) => {
  return updateObject(state, { loading: false })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_LIST_START: return getMovieListStart(state, action)
    case actionTypes.GET_MOVIE_LIST_SUCCESS: return getMovieListSuccess(state, action)
    case actionTypes.GET_MOVIE_LIST_FAIL: return getMovieListFail(state, action)
    case actionTypes.GET_MOVIE_DETAILS_START: return getMovieDetailsStart(state, action)
    case actionTypes.GET_MOVIE_DETAILS_SUCCESS: return getMovieDetailsSuccess(state, action)
    case actionTypes.GET_MOVIE_DETAILS_FAIL: return getMovieDetailsFail(state, action)
    default: return state
  }
}

export default reducer
