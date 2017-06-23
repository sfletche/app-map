// import 'whatwg-fetch';
// import { call } from 'redux-saga/effects';
import { activeApps } from './applications/active-apps';
import { fundedApps } from './applications/funded-apps';
import { caCities } from './applications/ca-cities';

// const DEFAULT_HEADERS = {
//   'Content-Type': 'application/json',
// };

let availabilityCounter = 1;

function updateMarkerTimestamps() {
  if (availabilityCounter === 1) {
    caCities.forEach(city => city.age = 0)
  }
  for (let i=0; i<availabilityCounter; i++) {
    caCities[i].age = caCities[i].age+1 || 0;
  }
}

function updateAvailbilityCounter() {
  availabilityCounter += Math.round(Math.random());
  availabilityCounter = (availabilityCounter % caCities.length) || 1;
  updateMarkerTimestamps();
}

export function request(url) {
  switch (url) {
    case 'active':
      return { json: activeApps }
    case 'funded':
      return { json: fundedApps }
    case 'availability': {
      updateAvailbilityCounter();
      return { json: caCities.slice(0, availabilityCounter) }
    }
    default:
      return { json: [] }
  }
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
