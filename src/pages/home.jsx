import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Content } from '../components/index'
import { filterAirport, filterDestination } from '../feautures/cart'

const Home = () => {
  const { filter } = useSelector((store) => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterDestination())
  }, [filter, filter.from, filter.to])

  useEffect(() => {
    dispatch(filterAirport())
  }, [filter.to, filter.arr, filter.dep])

  return (
    <>
      <Navbar />
      <Content />
    </>
  )
}

export default Home
