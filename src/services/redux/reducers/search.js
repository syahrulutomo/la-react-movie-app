import { updateObject } from '@/utilities'
import * as actionTypes from '../actions/action-types'

const initialState = {
  searched: [],
  loading: false,
  searchText: '',
  startDate: null,
  finishDate: null,
  showAutoComplete: false,
}

const getSearchedListStart = (state) => {
  return updateObject(state, { loading: true })
}

const getSearchedListSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    searched: action.searched,
  })
}

const getSearchedListFail = (state) => {
  return updateObject(state, { loading: false })
}

const setSearchedText = (state, action) => {
  return updateObject(state, { searchText: action.text })
}

const setStartDate = (state, action) => {
  return updateObject(state, { startDate: action.date })
}

const setFinishDate = (state, action) => {
  return updateObject(state, { finishDate: action.date })
}

const getListByDate = (state, action) => {
  return updateObject(state, { searched: action.list })
}

const showAutoComplete = (state, action) => {
  return updateObject(state, { showAutoComplete: action.show })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_LIST_START: return getSearchedListStart(state)
    case actionTypes.GET_SEARCH_LIST_SUCCESS: return getSearchedListSuccess(state, action)
    case actionTypes.GET_SEARCH_LIST_FAIL: return getSearchedListFail(state)
    case actionTypes.SET_SEARCH_TEXT: return setSearchedText(state, action)
    case actionTypes.SET_START_DATE: return setStartDate(state, action)
    case actionTypes.SET_FINISH_DATE: return setFinishDate(state, action)
    case actionTypes.GET_LIST_BY_DATE: return getListByDate(state, action)
    case actionTypes.SHOW_AUTOCOMPLETE: return showAutoComplete(state, action)
    default: return state
  }
}

export default reducer
