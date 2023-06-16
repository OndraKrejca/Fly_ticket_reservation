import React from 'react'

const FormInput = ({ names, values, handleChange, labeltext }) => {
  return (
    <div className='t-form__input'>
      <label htmlFor='personname'>
        {labeltext}:{' '}
        <input
          type='text'
          name={names}
          value={values}
          onChange={handleChange}
          id='personname'
        />
      </label>
    </div>
  )
}

export default FormInput
