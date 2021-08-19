import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchSearchList, setSearchedText } from '@/services/redux/actions/search'

const Input = (props) => {
  const { type, id, classes, placeholder, isActive, searched, onFetchSearchList, onSetSearchText, loading, searchText, movies } = props
  
  const [searchedText, setSearchedText] = useState('')
  const styleClasses = isActive ? 'active' : ''

  const handleChange = (e) => {
    onSetSearchText(e.target.value)
    onFetchSearchList({text: searchText, movie: movies})
  }

  useEffect(() => {
    onSetSearchText(searchedText)
    onFetchSearchList({text: searchText, movie: movies})
  },[searchedText])

  return (
    <input
      id={id}
      className={styleClasses}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
      value={searchText}
    />
  )
  
}

Input.propTypes = {
  id: PropTypes.string,
  array: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  isActive: PropTypes.bool,
  searched: PropTypes.array,
  onFetchSearchList: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  searchText: PropTypes.string,
  movies: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    searchText: state.search.searchText,
    movies: state.movie.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSearchList: (param) => dispatch(fetchSearchList(param.text, param.movie)),
    onSetSearchText: (text) => dispatch(setSearchedText(text)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)