import 'whatwg-fetch';
import { call } from 'redux-saga/effects';
import { request } from './request';

export function* fetchActiveApplications() {
  const url = 'active';
  const { json } = yield call(request, url);
  return json;
}

export function* fetchFundedApplications() {
  const url = 'funded';
  const { json } = yield call(request, url);
  return json;
}

export function* fetchAvailabilityRequests() {
  const url = 'availability';
  const { json } = yield call(request, url);
  return json;
}
