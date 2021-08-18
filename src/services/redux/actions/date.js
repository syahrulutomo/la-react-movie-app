import * as actionTypes from './action-types'
import moment from 'moment'

export const setStartDate = (date) => {
  return {
    type: actionTypes.SET_START_DATE,
    date
  }
}

export const setFinishDate = (date) => {
  return {
    type: actionTypes.SET_FINISH_DATE,
    date,
  }
}

export const getListByDate = (list) => {
  return {
    type: actionTypes.GET_LIST_BY_DATE,
    list,
  }
}

export const filterListByDate = (start, finish, list) => {
  return (dispatch) => {
    const filtered = list.filter((item) => moment(item.showTime).isBetween(moment(start), moment(finish)));
    dispatch(getListByDate(filtered))
  }
}