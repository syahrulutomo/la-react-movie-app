import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setStartDate, setFinishDate, filterListByDate } from '@/services/redux/actions/date'


const CustomDatepicker = (props) => {
  const { selected, isClearable, placeholder, type, startDate, finishDate, onSetStartDate, onSetFinishDate } = props 
  const [date, setDate] = useState(selected)
  
  useEffect(() => {
    if(type === 'start') onSetStartDate(date)
    else if(type === 'finish') onSetFinishDate(date)
  },[date])

  return (
    <DatePicker 
      className="datepicker"
      selected={date} 
      onChange={(date) => setDate(date)} 
      placeholderText={placeholder} 
      isClearable={isClearable} 
    />
  );
}

CustomDatepicker.propTypes = {
  selected: PropTypes.any,
  isClearable: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  startDate: PropTypes.any,
  finishDate: PropTypes.any,
  onSetStartDate: PropTypes.func,
  onSetFinishDate: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    startDate: state.search.startDate,
    finishDate: state.search.finishDate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetStartDate: (date) => dispatch(setStartDate(date)),
    onSetFinishDate: (date) => dispatch(setFinishDate(date)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDatepicker)
