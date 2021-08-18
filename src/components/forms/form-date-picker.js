import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CustomDatepicker from '../base/datepicker'

export default function FormDatePicker(props) {
  const { selectedStart, selectedFinish, isClearableStart, isClearableFinish, placeholderStart, placeholderFinish } = props
  return (
    <div className="form-date-picker">
      <CustomDatepicker type='start' selected={selectedStart} isClearable={isClearableStart} placeholder={placeholderStart} />
      <CustomDatepicker type='finish' selected={selectedFinish} isClearable={isClearableFinish} placeholder={placeholderFinish}  />
    </div>
  )
}
