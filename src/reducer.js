/* eslint-disable indent */
const initialState = {
  all: false,
  noTransfer: false,
  oneTransfer: true,
  twoTransfers: false,
  threeTransfers: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL':
      return { ...state, all: !state.all }

    case 'NO_TRANSFER':
      return { ...state, noTransfer: !state.noTransfer }

    case 'ONE_TRNASFER':
      return { ...state, oneTransfer: !state.oneTransfer }

    case 'TWO_TRANSFERS':
      return { ...state, twoTransfers: !state.twoTransfers }

    case 'THREE_TRANSFERS':
      return { ...state, threeTransfers: !state.threeTransfers }
    default:
      return state
  }
}

export default reducer
