import React from 'react'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const Inputairport = ({ text, value, name, onChange, fromItems }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{text}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          label={text}
          name={name}
          onChange={onChange}
          style={{ background: '#fff' }}
        >
          {fromItems.map((item, id) => {
            return (
              <MenuItem key={id} value={item}>
                {item}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Inputairport
