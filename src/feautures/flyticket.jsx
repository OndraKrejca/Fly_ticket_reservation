import { createSlice } from '@reduxjs/toolkit'
import { flyList } from '../utils/utils'

const initialState = {
  allFlys: flyList,
  oneTicket: [],
  modalWin: false,
  loading: false,

  person: {
    name: '',
    surname: '',
    seat: '',
  },
}

const flyticket = createSlice({
  name: 'flyticket',
  initialState,
  reducers: {
    updateItem: (state, { payload }) => {
      const { allFlys } = state
      const oneProduct = allFlys.find((item) => item.id === parseInt(payload))

      return {
        ...state,
        oneTicket: oneProduct,
      }
    },

    loadOrder: (state, { payload }) => {
      const { name, value } = payload

      return {
        ...state,
        person: {
          ...state.person,
          [name]: value,
        },
      }
    },

    modalOpen: (state) => {
      const { name, surname, seat } = state.person

      if (name && surname && seat) {
        return {
          ...state,
          modalWin: true,
        }
      }
    },

    modalClose: (state) => {
      return {
        ...state,
        modalWin: false,
        person: {
          ...state.person,
          name: '',
          surname: '',
          seat: '',
        },
      }
    },
  },
})

export const { updateItem, loadOrder, modalOpen, modalClose } =
  flyticket.actions

export default flyticket.reducer
