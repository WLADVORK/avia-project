/* eslint-disable indent */
const initialState = {
  all: false,
  noTransfer: false,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL':
      if (state.all) {
        return initialState
      }
      return {
        all: true,
        noTransfer: true,
        oneTransfer: true,
        twoTransfers: true,
        threeTransfers: true,
      }
    case 'NO_TRANSFER':
      if (state.all && state.noTransfer) {
        return { ...state, noTransfer: !state.noTransfer, all: false }
      }
      if (!state.noTransfer && state.oneTransfer && state.twoTransfers && state.threeTransfers) {
        return { ...state, noTransfer: !state.noTransfer, all: true }
      }
      return { ...state, noTransfer: !state.noTransfer }

    case 'ONE_TRNASFER':
      if (state.all && state.oneTransfer) {
        return { ...state, oneTransfer: !state.oneTransfer, all: false }
      }
      if (!state.oneTransfer && state.noTransfer && state.twoTransfers && state.threeTransfers) {
        return { ...state, oneTransfer: !state.oneTransfer, all: true }
      }
      return { ...state, oneTransfer: !state.oneTransfer }

    case 'TWO_TRANSFERS':
      if (state.all && state.twoTransfers) {
        return { ...state, twoTransfers: !state.twoTransfers, all: false }
      }
      if (!state.twoTransfers && state.noTransfer && state.oneTransfer && state.threeTransfers) {
        return { ...state, twoTransfers: !state.twoTransfers, all: true }
      }
      return { ...state, twoTransfers: !state.twoTransfers }

    case 'THREE_TRANSFERS':
      if (state.all && state.threeTransfers) {
        return { ...state, threeTransfers: !state.threeTransfers, all: false }
      }
      if (!state.threeTransfers && state.noTransfer && state.oneTransfer && state.twoTransfers) {
        return { ...state, threeTransfers: !state.threeTransfers, all: true }
      }
      return { ...state, threeTransfers: !state.threeTransfers }
    default:
      return state
  }
}

export default filterReducer
