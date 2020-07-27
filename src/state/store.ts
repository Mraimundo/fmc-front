import { createStore, compose, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';

import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import rootReducer, { StoreState } from './root-reducer';
import rootSaga from './root-saga';

export const history = createBrowserHistory();

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const middlewares: Middleware<{}, StoreState>[] = [sagaMiddleware];

if (process.env.REACT_APP_DEBUG_LOGGER) {
  const logger = createLogger();
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
