import React, { useState, useEffect, memo } from 'react'
import { useParams } from 'react-router-dom'
import { LayoutDefault, ContainerDefault } from '@/components'
import PartialHeader from '@/components/partials/header'
import Details from '@/components/partials/details'
import { connect } from 'react-redux'
import { fetchMovieDetails } from '@/services/redux/actions/details'
import PropTypes from 'prop-types'

const DetailMovie = (props) => {
  const { details, loading, onFetchMovieDetails } = props
  const params = useParams();

  useEffect(() => {
    console.log(params)
    onFetchMovieDetails(params.id)
  }, [])

  return (
    <>
      <PartialHeader title="Magnifie" />
      <LayoutDefault>
        <ContainerDefault>
          <Details details={details} />
        </ContainerDefault>
      </LayoutDefault>
    </>
  )
}

DetailMovie.propTypes = {
  details: PropTypes.object,
  onFetchMovieDetails: PropTypes.func,
  loading: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    details: state.movie.details,
    loading: state.movie.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovieDetails: (id) => dispatch(fetchMovieDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie)