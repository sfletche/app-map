import 'whatwg-fetch';
import { call } from 'redux-saga/effects';
import { request } from './request';

export function* fetchActiveApplications(programIdentifier, applicationId) {
  const url = '';
  const { json } = yield call(request, url);
  return json;
}
