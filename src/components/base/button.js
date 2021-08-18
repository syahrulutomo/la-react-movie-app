import React from 'react'

export default function Button(props) {
  const { id, classes, text, handleClick } = props
  
  return (
    <button id={id} className={classes} onClick={handleClick}>{text}</button>
  )
}
