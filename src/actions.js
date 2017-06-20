import * as actionTypes from './action-types'

export const increment = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.INCREMENT_REQUESTED
    })

    dispatch({
      type: actionTypes.INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: actionTypes.INCREMENT
      })
    }, 1000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.DECREMENT_REQUESTED
    })

    dispatch({
      type: actionTypes.DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: actionTypes.DECREMENT
      })
    }, 1000)
  }
}
