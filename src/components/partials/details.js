import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

export default function Details(props) {
  const { details } = props
  const formattedTime = moment(details.showTime).format("LL")

  // Create our number formatter.
  var formatter = new Intl.NumberFormat('id-ID', {
    maximumSignificantDigits: 3
  });

  return (
    details ? (
      <section className="details-movie">
        <div className="details-movie__thumbnail">
          <img src={details.image} alt={details.title}/>
        </div>
        <div className="details-movie__info">
          <div className="item title">
            <span className="label">Judul</span>:
            <span className="value">{details.title}</span>
          </div>
          <div className="item title">
            <span className="label">Tanggal rilis</span>:
            <span className="value">{formattedTime}</span>
          </div>
          <div className="item title">
            <span className="label">Likes</span>:
            <span className="value">{formatter.format(details.like)}</span>
          </div>
        </div>
      </section>
    ): ''
  )
}

Details.propTypes = {
  details: PropTypes.object,
}