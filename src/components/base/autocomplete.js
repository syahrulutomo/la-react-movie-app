import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchSearchList, setSearchedText, showAutoComplete } from '@/services/redux/actions/search'
import PropTypes from 'prop-types'

const Autocomplete = (props) => {
  const { list, text, searchText, onSetSearchText, onFetchSearchList, movies, onShowAutoComplete, showAutoComplete } = props
  const [isShow, setIsShow] = useState(true)
  
  const handleClick = (e) => {
    setIsShow(false)
    onShowAutoComplete(false)
    onSetSearchText(e.target.dataset.title)
    onFetchSearchList({text: searchText, movie: movies})
  }

  useEffect(() => {
    setIsShow(true)
    onShowAutoComplete(true)
  },[searchText])

  useEffect(() => {
    setIsShow(showAutoComplete)
  },[showAutoComplete])

  return (
    showAutoComplete ? (
      <div className="autocomplete">
        <ul>
          {
            text !== '' ?
            list.filter(item => item.title.includes(text)).map((item, index) => index < 10 ? <li key={index} data-title={item.title} onClick={handleClick}>{item.title}</li> : '') :
            ''
          }
        </ul>
      </div>
    ) : ''
  )
}

const mapStateToProps = (state) => {
  return {
    searchText: state.search.searchText,
    showAutoComplete: state.search.showAutoComplete,
    movies: state.movie.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSearchList: (param) => dispatch(fetchSearchList(param.text, param.movie)),
    onSetSearchText: (text) => dispatch(setSearchedText(text)),
    onShowAutoComplete: (boolean) => dispatch(showAutoComplete(boolean))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete)
