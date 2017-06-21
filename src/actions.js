import * as actionTypes from './action-types'

export const fetchActiveApplications = (response) => {
  console.log('actions.fetchActiveApplications');
  return {
    type: actionTypes.FETCH_ACTIVE_APPLICATIONS,
    response,
  }
}

export const receiveActiveApplications = (response) => {
  console.log('actions.receiveActiveApplications', response);
  return {
    type: actionTypes.RECEIVE_ACTIVE_APPLICATIONS,
    response,
  }
}

