import React, { useEffect } from 'react'
import moment from 'moment'
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa'
import { BsCurrencyDollar } from 'react-icons/bs'
import { Navbar, FormInput, Modal } from '../components/index'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateItem, loadOrder, modalOpen } from '../feautures/flyticket'
import { resetTicket } from '../feautures/cart'
import { modalClose } from '../feautures/flyticket'
import Button from '@mui/material/Button'

const Oneticket = () => {
  const dispatch = useDispatch()
  const {
    oneTicket,
    person: { name, surname, seat },
    modalWin,
  } = useSelector((store) => store.ticket)
  const { id } = useParams()

  const { from, to, departure, arrival, price, seats, duration } = oneTicket

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    if (name === 'seat') {
      value = e.target.dataset.label
    }
    dispatch(loadOrder({ name, value }))
  }

  useEffect(() => {
    dispatch(updateItem(id))
  }, [])

  return (
    <>
      <Navbar />
      <main className='main__content'>
        {modalWin && <Modal />}
        <section className='ticket__content'>
          <article className='ticket'>
            <h3>Váš vybraný let</h3>

            <div className='ticket__direction'>
              <article className='t-direction__dep'>
                <FaPlaneDeparture className='t-direction__icon' />
                <p>
                  <span>Odlet: </span>
                  {from}
                </p>
                <p>{moment(departure).format('LLL')}</p>
              </article>

              <div className='t-direction__duration'>
                <hr></hr>
                <p>Doba letu: {duration}</p>
                <hr></hr>
              </div>

              <article className='t-direction__arr'>
                <FaPlaneArrival className='t-direction__icon' />
                <p>
                  <span>Přílet: </span>
                  {to}
                </p>
                <p>{moment(arrival).format('LLL')}</p>
              </article>
            </div>

            <div className='ticket__props'>
              <article className='ticket__seats'>
                <h4>Vyberte své sedadlo</h4>
                {seats?.map((item) => {
                  const { id, number, available } = item

                  return (
                    <div key={id} className='ticket__box'>
                      <input
                        type='checkbox'
                        name='seat'
                        data-label={id}
                        value={seat}
                        disabled={!available ? true : false}
                        onChange={handleChange}
                        checked={id === parseInt(seat)}
                      ></input>
                      <p
                        className='t-seat'
                        style={{
                          background: available ? '#b5bb78' : '#ed4439',
                        }}
                      >
                        sedadlo č.: {number}
                      </p>
                      {!available && (
                        <p className='t-seat' style={{ color: '#ed4439' }}>
                          Vyprodáno
                        </p>
                      )}
                    </div>
                  )
                })}
              </article>
              <article className='ticket__price'>
                <h4 className='t-ticket__price'>Vaše cena:</h4>
                <p>
                  {price}
                  <BsCurrencyDollar />
                </p>
              </article>
            </div>

            <div className='ticket__form'>
              <h4>Vaše osobní údaje</h4>
              <form className='t-form__box'>
                <FormInput
                  values={name}
                  names={'name'}
                  handleChange={handleChange}
                  labeltext={'Vaše jméno'}
                />
                <FormInput
                  values={surname}
                  names={'surname'}
                  handleChange={handleChange}
                  labeltext={'Vaše příjmení'}
                />
              </form>
              <div className='t-btn__box'>
                <Link to={'/'}>
                  <Button
                    variant='outlined'
                    color='error'
                    className='ticket__btn'
                    onClick={() => {
                      dispatch(resetTicket()), dispatch(modalClose())
                    }}
                  >
                    Zpět
                  </Button>
                </Link>

                <Button
                  variant='contained'
                  type='submit'
                  className='ticket__btn'
                  onClick={() => dispatch(modalOpen())}
                >
                  Koupit
                </Button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Oneticket
