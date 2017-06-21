// import 'whatwg-fetch';
// import { call } from 'redux-saga/effects';
import { activeApps } from './applications/active-apps';

// const DEFAULT_HEADERS = {
//   'Content-Type': 'application/json',
// };

export function request() {
  return { json: activeApps }
}

// export function* request(url, params, headers) {
//   const requestHeaders = {
//     ...DEFAULT_HEADERS,
//     ...headers,
//   };
//   const defaultParams = {
//     method: 'GET',
//     headers: new Headers(requestHeaders),
//     credentials: 'include',
//   };

//   customize method, body etc
//   const requestParams = {
//     ...defaultParams,
//     ...params,
//   };

//   const response = yield call(fetch, url, requestParams);

//   if (response.ok) {
//     const json = yield call([response, response.json]);
//     return { json };
//   }
//   return { response };
// }
