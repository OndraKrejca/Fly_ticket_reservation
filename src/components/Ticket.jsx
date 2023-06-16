import React from 'react'
import { BsArrowRight, BsCurrencyDollar } from 'react-icons/bs'
import Button from '@mui/material/Button'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Ticket = ({ id, from, to, departure, arrival, price }) => {
  return (
    <article className='ticket_cnt'>
      <div className='ticket__header'>
        <p className='t-header__from'>
          <span>Z:</span> {from}
        </p>
        <BsArrowRight className='t-header__icon' />
        <p className='t-header__to'>
          <span>Do:</span> {to}
        </p>
      </div>

      <div className='ticket__body'>
        <article className='t-body__time'>
          <p className='t-body__dep'>
            <span>Odlet:</span> {moment(departure).format('LLL')}
          </p>
          <p className='t-body__arr'>
            <span>Přílet:</span> {moment(arrival).format('LLL')}
          </p>
        </article>

        <article className='t-body__footer'>
          <p className='t-body__price'>
            <span>Cena:</span> {price}
            <BsCurrencyDollar />
          </p>

          <Button variant='contained' type='submit'>
            <Link to={`/oneticket/${id}`} className='btn__link'>
              Vybrat
            </Link>
          </Button>
        </article>
      </div>
    </article>
  )
}

export default Ticket
