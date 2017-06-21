import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as actionTypes from './action-types';
import * as actions from './actions';
import * as api from './api';


export function* fetchActiveApplications(action) {
  try {
    const response = yield call(api.fetchActiveApplications);
    yield put(actions.receiveActiveApplications(response));
  } catch (e) {
    yield put(actions.receiveActiveApplications([]));
  }
}

function* watchFetchActiveApplications() {
  yield call(takeLatest, actionTypes.FETCH_ACTIVE_APPLICATIONS, fetchActiveApplications);
}

export function* fetchFundedApplications(action) {
  try {
    const response = yield call(api.fetchFundedApplications);
    yield put(actions.receiveFundedApplications(response));
  } catch (e) {
    yield put(actions.receiveFundedApplications([]));
  }
}

function* watchFetchFundedApplications() {
  yield call(takeLatest, actionTypes.FETCH_FUNDED_APPLICATIONS, fetchFundedApplications);
}

export function* fetchAvailabilityRequests(action) {
  try {
    const response = yield call(api.fetchAvailabilityRequests);
    yield put(actions.receiveAvailabilityRequests(response));
  } catch (e) {
    yield put(actions.receiveAvailabilityRequests([]));
  }
}

function* watchFetchAvailabilityRequests() {
  yield call(takeLatest, actionTypes.FETCH_AVAILABILITY_REQUESTS, fetchAvailabilityRequests);
}

export default function* fetchApplications() {
  yield [
    watchFetchActiveApplications(),
    watchFetchFundedApplications(),
    watchFetchAvailabilityRequests(),
  ];
}
