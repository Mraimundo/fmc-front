import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const middlewares = [sagaMiddleware, logger];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
