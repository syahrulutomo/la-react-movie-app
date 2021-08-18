import { updateObject } from '@/utilities'
import * as actionTypes from '../actions/action-types'

const initialState = {
  movies: [],
  loading: false,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_LIST_START: return getMovieListStart(state, action)
    case actionTypes.GET_MOVIE_LIST_SUCCESS: return getMovieListSuccess(state, action)
    case actionTypes.GET_MOVIE_LIST_FAIL: return getMovieListFail(state, action)
    default: return state
  }
}

export default reducer
