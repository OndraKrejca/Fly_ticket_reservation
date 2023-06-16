import React from 'react'
import { Ticket, Itemnum } from './index'
import { useSelector } from 'react-redux'

const TicketList = () => {
  const {
    showTicket,
    filterFly,
    filter: { from },
  } = useSelector((store) => store.products)

  if (filterFly.length < 1) {
    return (
      <section className='ticket__list'>
        <Itemnum items={filterFly} />
      </section>
    )
  }

  return (
    <section className='ticket__list'>
      {from !== 'all' ? <Itemnum items={filterFly} /> : null}
      {showTicket.length >= 1 ? <Itemnum items={showTicket} /> : null}
      {showTicket.map((item, id) => {
        return <Ticket key={id} {...item} />
      })}
    </section>
  )
}

export default TicketList
