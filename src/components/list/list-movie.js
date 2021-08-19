import React from 'react'
import Card from '@/components/base/card'
import { showAutoComplete } from '@/services/redux/actions/search'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ListMovie = (props) => {
  const { list, onShowAutoComplete } = props

  const handleClick = () => {
    onShowAutoComplete(false)
  }

  return (
    <section className="list-movie" onClick={handleClick}>
      {
        list ? list.map(item => {
          return (
            <Card key={item.id} id={item.id} thumbnail={item.image} title={item.title} time={item.showTime} /> 
          )
        }): ''
      }
      
    </section>
  )
}

ListMovie.propTypes = {
  list: PropTypes.array,
  onShowAutoComplete: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShowAutoComplete: (boolean) => dispatch(showAutoComplete(boolean))
  }
}

export default connect(null,mapDispatchToProps)(ListMovie)