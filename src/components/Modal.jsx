import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaPlaneDeparture, FaPlaneArrival, FaChair } from 'react-icons/fa'
import { BsCurrencyDollar } from 'react-icons/bs'
import { resetTicket } from '../feautures/cart'
import { modalClose } from '../feautures/flyticket'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Button from '@mui/material/Button'

const Modal = () => {
  const {
    oneTicket,
    person: { name, surname, seat },
  } = useSelector((store) => store.ticket)
  const dispatch = useDispatch()

  const { from, to, departure, arrival, price, seats, duration } = oneTicket

  const filterSeat = seats?.find((item) => item.id === parseInt(seat))

  return (
    <section className='modal__cont'>
      <article className='modal__box'>
        <h3>Potvrzení vaší letenky</h3>

        <div className='modal__personal'>
          <p>
            <span>Jméno: </span>
            {name}
          </p>
          <p>
            <span>Příjmení: </span>
            {surname}
          </p>
        </div>
        <hr />
        <div className='modal__direction'>
          <article className='m-direction__dep'>
            <FaPlaneDeparture className='m-direction__icon' />
            <p>
              <span>Odlet: </span>
              {from}
            </p>
            <p>{moment(departure).format('LLL')}</p>
          </article>

          <div className='m-direction__duration'>
            <hr></hr>
            <p>Doba letu: {duration}</p>
            <hr></hr>
          </div>

          <article className='m-direction__arr'>
            <FaPlaneArrival className='m-direction__icon' />
            <p>
              <span>Přílet: </span>
              {to}
            </p>
            <p>{moment(arrival).format('LLL')}</p>
          </article>
        </div>
        <hr />

        <div className='modal__seat'>
          <p>
            <FaChair /> <span> sedadlo č. </span> {filterSeat?.number}
          </p>

          <div className='m-price'>
            <h4 className='m-price__text'>Cena:</h4>
            <p>
              {price}
              <BsCurrencyDollar />
            </p>
          </div>

          <Link to={'/'}>
            <Button
              variant='outlined'
              color='error'
              className='ticket__btn'
              onClick={() => {
                dispatch(resetTicket())
                dispatch(modalClose())
              }}
            >
              Dokončit
            </Button>
          </Link>
        </div>
      </article>
    </section>
  )
}

export default Modal
