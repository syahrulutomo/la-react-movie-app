import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
  const { id, classes, text, handleClick } = props
  
  return (
    <button id={id} className={classes} onClick={handleClick}>{text}</button>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  classed: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func,
}