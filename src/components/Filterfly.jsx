import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { newItems, dateMinMax } from '../utils/helpers'
import { loadDestination, submitData, resetTicket } from '../feautures/cart'
import { Inputairport, Inputdate } from './index'
import Button from '@mui/material/Button'

const Filterfly = () => {
  const {
    allfly,
    filterFly,
    filter: { from, to, dep, arr },
  } = useSelector((store) => store.products)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(loadDestination({ name, value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(submitData())
  }

  const depDateMin = dateMinMax(allfly, 'departure')
  const arrDateMin = dateMinMax(allfly, 'arrival')

  const fromItems = newItems(allfly, 'from')
  const toItems = newItems(filterFly, 'to')

  return (
    <article className='filter__cnt'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form__input'>
          <h5>Letiště odletu</h5>

          <Inputairport
            text={'Z'}
            value={from}
            name={'from'}
            onChange={handleChange}
            fromItems={fromItems}
          />
        </div>

        <div className='form__input'>
          <h5>Cílové letiště</h5>

          <Inputairport
            text={'Do'}
            value={to}
            name={'to'}
            onChange={handleChange}
            fromItems={toItems}
          />
        </div>

        <div className='form__input'>
          <h5>Odlet</h5>

          <input
            type='date'
            name='dep'
            value={dep}
            min={depDateMin[depDateMin.length - 1]}
            max={depDateMin[0]}
            required='required'
            onChange={handleChange}
            className='input__date'
          />
        </div>

        <div className='form__input'>
          <h5>Přílet</h5>
          <input
            type='date'
            name='arr'
            value={arr}
            min={arrDateMin[arrDateMin.length - 1]}
            max={arrDateMin[0]}
            onChange={handleChange}
            className='input__date'
          />
        </div>

        <Button variant='contained' type='submit'>
          Vyhledat
        </Button>
        <Button
          variant='outlined'
          color='error'
          type='reset'
          value='Reset'
          onClick={() => dispatch(resetTicket())}
        >
          Reset
        </Button>
      </form>
    </article>
  )
}

export default Filterfly
