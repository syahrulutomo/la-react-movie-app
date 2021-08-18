import React, { useState, useEffect, memo } from 'react'
import { LayoutDefault, ContainerDefault } from '@/components'
import PartialHeader from '@/components/partials/header'
import ListMovie from '@/components/list/list-movie'
import Button from '@/components/base/button'
import { connect } from 'react-redux'
import { fetchMovieList } from '@/services/redux/actions/movie'
import { filterListByDate } from '@/services/redux/actions/date'
import PropTypes from 'prop-types'
import FormDatePicker from '@/components/forms/form-date-picker'


const HomeView = memo((props) => {
  const { movies, onFetchMovieList, loading, searched, searchedText, startDate, finishDate, onFilterListByDate } = props
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const [hasNext, setHasNext] = useState(false)
  const [buttonText, setButtonText] = useState('Load More')
  const [loadedMovies, setLoadeMovies] = useState([])

  const [startDateLocal, setStartDate] = useState('')
  const [finishDateLocal, setFinishDate] = useState('')

  const handleClick = (e) => {
    setPage(page + 1)
    setButtonText('Loading...')
    setTimeout(() => {
      setButtonText('Load More')
    },2000)
  }

  useEffect(() => {
    onFetchMovieList()
  }, []);

  useEffect(() => {
    if(searched.length > 0 ) {
      setLoadeMovies(searched.slice(0,8))
      setTotalPage(Math.ceil(searched.length/8))
    } else {
      setLoadeMovies(movies.slice(0,8))
      setTotalPage(Math.ceil(movies.length/8))
    }
  }, [searched.length, movies.length]);

  useEffect(() => {
    if(searched.length > 0) {
      setLoadeMovies(searched.slice(0, page * 8))
    } else {
      setLoadeMovies(movies.slice(0, page * 8))
    }
  }, [page, searched]);

  useEffect(() => {
    if(startDate && finishDate && movies.length > 0) {
      onFilterListByDate({start: startDate, finish: finishDate, list: movies })
    } else if(!startDate && !finishDate) {
      setLoadeMovies(movies)
    }
  }, [startDate, finishDate]);

  return (
    <>
      <PartialHeader title="Magnifie" />
      <LayoutDefault>
        <ContainerDefault>
        <FormDatePicker
          selectedStart={startDate}
          selectedFinish={finishDate}
          isClearableStart={true}
          isClearableFinish={true}
          placeholderStart="Start Date"
          placeholderFinish="Finish Date"
        />
          {
            loadedMovies.length > 0 ? (
              <>
                <ListMovie list={loadedMovies} />
                {  
                  page <= totalPage ? 
                  (<Button id="load-more" classes="load-more-btn" text={buttonText} handleClick={handleClick}/>) : 
                  ''
                }
              </>
            )  : ''
          }
          
        </ContainerDefault>
      </LayoutDefault>
    </>
  )
})


HomeView.propTypes = {
  movies: PropTypes.array,
  searched: PropTypes.array,
  onFetchMovieList: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  searched: PropTypes.array,
  searchedText: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    movies: state.movie.movies,
    loading: state.movie.loading,
    searched: state.search.searched,
    searchText: state.search.searchText,
    startDate: state.search.startDate,
    finishDate: state.search.finishDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovieList: () => dispatch(fetchMovieList()),
    onFilterListByDate: (param) => dispatch(filterListByDate(param.start, param.finish, param.list)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
