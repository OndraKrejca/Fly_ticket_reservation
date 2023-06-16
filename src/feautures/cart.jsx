import { createSlice } from '@reduxjs/toolkit'
import { flyList } from '../utils/utils'

const initialState = {
  allfly: flyList,
  filterFly: [],
  showTicket: [],
  loading: false,

  filter: {
    from: 'all',
    to: 'all',
    dep: '',
    arr: '',
  },
}

const ticketCart = createSlice({
  name: 'chooseFly',
  initialState,
  reducers: {
    submitData: (state) => {
      return {
        ...state,
        showTicket: state.filterFly,

        filter: {
          from: 'all',
          to: 'all',
          dep: '',
          arr: '',
        },
      }
    },

    loadDestination: (state, { payload }) => {
      const { name, value } = payload

      return {
        ...state,
        showTicket: [],

        filter: {
          ...state.filter,
          [name]: value,
        },
      }
    },

    filterAirport: (state) => {
      let newData = [...state.filterFly]
      const { to, dep, arr } = state.filter

      if (to !== 'all') {
        newData = newData.filter((item) => {
          return item.to === to
        })
      }

      if (dep && arr) {
        newData = newData.filter(
          (item) =>
            item.departure.slice(0, 10) === dep &&
            item.arrival.slice(0, 10) === arr
        )
      }

      return {
        ...state,
        filterFly: newData,
      }
    },

    filterDestination: (state) => {
      let newData = [...state.allfly]

      const { from } = state.filter

      if (from !== 'all') {
        newData = newData.filter((item) => {
          return item.from === from
        })
      }

      return {
        ...state,
        filterFly: newData,
      }
    },

    resetTicket: (state) => {
      return {
        ...state,
        allfly: flyList,
        filterFly: [],
        showTicket: [],
        filter: {
          from: 'all',
          to: 'all',
          dep: '',
          arr: '',
        },
      }
    },
  },
})

export const {
  loadDestination,
  filterDestination,
  updateFly,
  submitData,
  actual,
  resetTicket,
  filterAirport,
  validationDate,
  changeError,
} = ticketCart.actions

export default ticketCart.reducer
