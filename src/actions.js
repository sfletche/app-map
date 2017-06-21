import * as actionTypes from './action-types'

export const fetchActiveApplications = (response) => {
  return {
    type: actionTypes.FETCH_ACTIVE_APPLICATIONS,
    response,
  }
}

export const receiveActiveApplications = (response) => {
  return {
    type: actionTypes.RECEIVE_ACTIVE_APPLICATIONS,
    response,
  }
}

