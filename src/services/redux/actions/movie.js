import axios from '@/services/libs/axios'
import * as actionTypes from './action-types'

export const getMovieListStart = () => {
  return {
    type: actionTypes.GET_MOVIE_LIST_START,
  }
}

export const getMovieListSuccess = (movies) => {
  return {
    type: actionTypes.GET_MOVIE_LIST_SUCCESS,
    movies,
  }
}

export const getMovieListFail = (error) => {
  return {
    type: actionTypes.GET_MOVIE_LIST_FAIL,
    error,
  }
}

export const fetchMovieList = () => {
  return async (dispatch) => {
    dispatch(getMovieListStart())
    try {
      const movies = await axios.get()
      dispatch(getMovieListSuccess(movies.data))
    } catch (error) {
      dispatch(getMovieListFail(error))
    }
  }
}
