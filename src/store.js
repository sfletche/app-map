import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import rootSaga from './saga'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
)

const store = createStore(
  rootReducer,
  composedEnhancers
)

sagaMiddleware.run(rootSaga)

export default store
