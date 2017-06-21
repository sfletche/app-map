import { combineReducers } from 'redux';
import * as actionTypes from '../action-types'

const initialState = {
  activeApps: [],
  fundedApps: [],
}

function applications(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_ACTIVE_APPLICATIONS: {
      return state;
    }
    case actionTypes.RECEIVE_ACTIVE_APPLICATIONS: {
      return {
        ...state,
        activeApps: action.response,
      }
    }
    default:
      return state;
  }
}

export default combineReducers({
  applications,
});
