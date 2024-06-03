/* eslint-disable indent */
const initialState = {
  tickets: [],
  stop: false,
  page: 1,
}

const serverReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS':
      // eslint-disable-next-line max-len
      return { ...state, tickets: [...state.tickets, ...action.payload.tickets], stop: action.payload.stop }
    case 'PAGE_INC':
      return { ...state, page: state.page + 1 }
    default:
      return state
  }
}

export default serverReducer
