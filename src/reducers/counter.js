import * as actionTypes from '../action-types'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: false
      }

    case actionTypes.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: false
      }

    default:
      return state
  }
}
