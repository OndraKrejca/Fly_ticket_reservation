import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const Inputdate = ({ text, min, max, required }) => {
  const [val, setVal] = useState([])
  const [valn, setValn] = useState([])

  const handle = (e) => {
    const v = e.target.label

    console.log(n, v)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        type='date'
        label={val}
        onChange={handle}
        slotProps={{
          textField: {
            helperText: 'MM/DD/YYYY',
          },
        }}
      />
    </LocalizationProvider>
  )
}

export default Inputdate
