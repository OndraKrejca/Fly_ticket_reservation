import React from 'react'

const Itemnum = ({ items }) => {
  return (
    <div className='t-list__div'>
      <p>
        Počet položek: <span>{items.length}</span>
      </p>
    </div>
  )
}

export default Itemnum
