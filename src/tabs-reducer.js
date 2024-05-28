/* eslint-disable indent */
const initialState = {
  cheapest: true,
  fastest: false,
  optimal: false,
}

const tabsReducser = (state = initialState, action) => {
  switch (action.type) {
    case 'CHEAPEST':
      return initialState
    case 'FASTEST':
      return {
        cheapest: false,
        fastest: true,
        optimal: false,
      }
    case 'OPTIMAL':
      return {
        cheapest: false,
        fastest: false,
        optimal: true,
      }
    default:
      return state
  }
}

export default tabsReducser
