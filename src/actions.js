import * as actionTypes from './action-types'

export const fetchActiveApplications = (response) => {
  return {
    type: actionTypes.FETCH_ACTIVE_APPLICATIONS,
  }
}

export const receiveActiveApplications = (response) => {
  return {
    type: actionTypes.RECEIVE_ACTIVE_APPLICATIONS,
    response,
  }
}

export const fetchFundedApplications = (response) => {
  return {
    type: actionTypes.FETCH_FUNDED_APPLICATIONS,
  }
}

export const receiveFundedApplications = (response) => {
  return {
    type: actionTypes.RECEIVE_FUNDED_APPLICATIONS,
    response,
  }
}

export const fetchAvailabilityRequests = (response) => {
  return {
    type: actionTypes.FETCH_AVAILABILITY_REQUESTS,
  }
}

export const receiveAvailabilityRequests = (response) => {
  return {
    type: actionTypes.RECEIVE_AVAILABILITY_REQUESTS,
    response,
  }
}


