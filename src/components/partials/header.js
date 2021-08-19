import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { routes } from '@/constants'
import SearchIcon from '@/assets/images/search.svg'
import Input from '@/components/forms/input-search'
import Autocomplete from '@/components/base/autocomplete'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchSearchList, showAutoComplete } from '@/services/redux/actions/search'

const PartialHeader = (props) => {
  const { title, searched, onFetchSearchList, loading, searchText, movies, onShowAutoComplete } = props

  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleClickHeader = () => {
    onShowAutoComplete(false)
  }

  return (
    <header className="header" onClick={handleClickHeader}>
      <div className="header__container">
        <div className="header__logo">
          <Link to={routes.home}>
            <h3 className="logo">{title}</h3>
          </Link>
        </div>
        <div className="header__search">
          <Input isActive={isOpen}  class="search-input" id="search-input" placeholder="Search anything" type="text" />
          <img src={SearchIcon} onClick={handleClick} />
        </div>
      </div>
      <Autocomplete list={movies} text={searchText} />
    </header>
  )
}

PartialHeader.propTypes = {
  title: PropTypes.string,
  searched: PropTypes.array,
  onFetchSearchList: PropTypes.func,
  loading: PropTypes.bool,
  searchText: PropTypes.string,
  movies: PropTypes.array,
  onShowAutoComplete: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    movies: state.movie.movies,
    searchText: state.search.searchText,
    searched: state.search.searched,
    loading: state.search.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSearchList: (param) => dispatch(fetchSearchList(param.text, param.movie)),
    onShowAutoComplete: (boolean) => dispatch(showAutoComplete(boolean))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartialHeader)