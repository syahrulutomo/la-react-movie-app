import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { ThumbnailLoader } from '@/components/loaders'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = (props) => {
  const { id, thumbnail, title, time, loading, movies } = props

  const [didLoad, setDidLoad] = useState(false);

  const formattedTime = moment(time).format("LL")

  return (
    <div key={id} className="list-movie__card">
      <div className="list-movie__card__thumbnail" >
        <Link to={{pathname: `/details/${id}`}}>
          <img src={thumbnail} loading="lazy" alt={title} onLoad={() => setDidLoad(true)} />
        </Link>
      </div>
      {
        !didLoad ? <ThumbnailLoader/> : ''
      }
      {
        didLoad ? <p className="list-movie__card__title">{title}</p> : ''
      }
      {
        didLoad ? <p className="list-movie__card__time">{formattedTime}</p> : ''
      }
      
      
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  loading: PropTypes.bool,
  movies: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    loading: state.movie.loading,
    movies: state.movie.movies
  }
}

export default connect(mapStateToProps)(Card)
