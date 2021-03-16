import { createStore, compose, applyMiddleware, Middleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';

import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import env from 'config/env';
import rootReducer, { StoreState } from './root-reducer';
import rootSaga from './root-saga';

export const history = createBrowserHistory();

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const middlewares: Middleware<{}, StoreState>[] = [sagaMiddleware];

if (env.loggerDebug) {
  const logger = createLogger({
    collapsed: true,
  });
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(...middlewares)),
  compose(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
