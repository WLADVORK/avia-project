export const ALL = () => ({ type: 'ALL' })

export const NO_TRANSFER = () => ({ type: 'NO_TRANSFER' })

export const ONE_TRNASFER = () => ({ type: 'ONE_TRNASFER' })

export const TWO_TRANSFERS = () => ({ type: 'TWO_TRANSFERS' })

export const THREE_TRANSFERS = () => ({ type: 'THREE_TRANSFERS' })

export const CHEAPEST = () => ({ type: 'CHEAPEST' })

export const FASTEST = () => ({ type: 'FASTEST' })

export const OPTIMAL = () => ({ type: 'OPTIMAL' })

export const GET_TICKETS = (dispatch) => {
  fetch('https://aviasales-test-api.kata.academy/search')
    .then((response) => response.json())
    .then((result) => fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${result.searchId}`))
    .then((response) => response.json())
    .then((result) => dispatch({ type: 'TICKETS', payload: result }))
}
