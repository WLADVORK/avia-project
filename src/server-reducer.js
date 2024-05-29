/* eslint-disable indent */
const initialState = {
  tickets: [],
}

const serverReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS':
      if (action.payload && !action.payload.stop) {
        return { tickets: [...state.tickets, ...action.payload.tickets] }
      }
      return state
    default:
      return state
  }
}

export default serverReducer
