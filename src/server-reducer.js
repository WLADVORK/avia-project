/* eslint-disable indent */
const initialState = {
  tickets: [],
  stop: false,
}

const serverReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS':
      return { tickets: [...state.tickets, ...action.payload.tickets], stop: action.payload.stop }

    default:
      return state
  }
}

export default serverReducer
