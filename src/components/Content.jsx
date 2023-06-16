import React from 'react'
import { Filterfly, TicketList } from './index'

const Content = () => {
  return (
    <main className='main__content'>
      <div className='image__bck'></div>
      <Filterfly />
      <TicketList />
    </main>
  )
}

export default Content
