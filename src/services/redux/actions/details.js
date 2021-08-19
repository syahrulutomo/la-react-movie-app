import axios from '@/services/libs/axios'
import * as actionTypes from './action-types'

export const getMovieDetailsStart = () => {
  return {
    type: actionTypes.GET_MOVIE_DETAILS_START,
  }
}

export const getMovieDetailsSuccess = (details) => {
  return {
    type: actionTypes.GET_MOVIE_DETAILS_SUCCESS,
    details,
  }
}

export const getMovieDetailsFail = (error) => {
  return {
    type: actionTypes.GET_MOVIE_DETAILS_FAIL,
    error,
  }
}

export const fetchMovieDetails = (id) => {
  return async (dispatch) => {
    dispatch(getMovieDetailsStart())
    try {
      const details = await axios.get(id)
      dispatch(getMovieDetailsSuccess(details.data))
    } catch (error) {
      dispatch(getMovieDetailsFail(error))
    }
  }
}
