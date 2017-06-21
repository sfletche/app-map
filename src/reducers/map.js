import { combineReducers } from 'redux';
import * as actionTypes from '../action-types'

const initialState = {
  activeApps: [],
  fundedApps: [],
}

function applications(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.RECEIVE_ACTIVE_APPLICATIONS: {
      return {
        ...state,
        activeApps: action.response,
      }
    }
    case actionTypes.RECEIVE_FUNDED_APPLICATIONS: {
      return {
        ...state,
        fundedApps: action.response,
      }
    }
    default:
      return state;
  }
}

export default combineReducers({
  applications,
});
