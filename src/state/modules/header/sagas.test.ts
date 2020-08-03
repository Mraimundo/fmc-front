import { takeEvery } from 'redux-saga/effects';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import { fetchCoinQuotationsService, fetchMenuService } from 'services/header';
import { handlerErrors } from 'util/handler-errors';
import * as constants from './constants';
import * as actions from './actions';
import reducer, { initialState } from './reducer';
import mainSaga, { workerFetchCoinQuotation, workerFetchMenu } from './sagas';
import { coinQuotations, menu } from './mock';

describe('src/state/modules/header/sagas', () => {
  describe('workerFetchCoinQuotation', () => {
    test('shuld fetch coins', async () => {
      await expectSaga(workerFetchCoinQuotation)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [matchers.call.fn(fetchCoinQuotationsService), coinQuotations],
        ])
        .call(fetchCoinQuotationsService)
        .put(actions.fetchCoinQuotationSuccess(coinQuotations))
        .dispatch(actions.fetchCoinQuotation())
        .hasFinalState({
          ...initialState,
          coinQuotations,
        })
        .run();
    });

    test('should throw error', async () => {
      const error = 'Não foi possível obter a cotação das moedas';

      await expectSaga(workerFetchCoinQuotation)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(fetchCoinQuotationsService), null]])
        .call(fetchCoinQuotationsService)
        .call(
          handlerErrors,
          new Error(error),
          actions.fetchCoinQuotationFailure,
        )
        .put(actions.fetchCoinQuotationFailure(error))
        .dispatch(actions.fetchCoinQuotation())
        .hasFinalState({
          ...initialState,
          fetchCoinQuotations: {
            isFetching: false,
            error,
          },
        })
        .run();
    });
  });

  describe('workerFetchMenu', () => {
    test('should fetch menu', async () => {
      await expectSaga(workerFetchMenu)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(fetchMenuService), menu]])
        .call(fetchMenuService)
        .put(actions.fetchMenuSuccess(menu))
        .dispatch(actions.fetchMenu())
        .hasFinalState({
          ...initialState,
          menu,
        })
        .run();
    });

    test('should throw error', async () => {
      const error = 'Não foi encontrado nenhum item para o menu';

      await expectSaga(workerFetchMenu)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(fetchMenuService), null]])
        .call(fetchMenuService)
        .call(handlerErrors, new Error(error), actions.fetchMenuFailure)
        .put(actions.fetchMenuFailure(error))
        .dispatch(actions.fetchMenu())
        .hasFinalState({
          ...initialState,
          fetchMenu: {
            isFetching: false,
            error,
          },
        })
        .run();
    });
  });

  test('main saga takes actions', () => {
    testSaga(mainSaga)
      .next()
      .all([
        takeEvery(
          constants.FETCH_COIN_QUOTATION_ACTION,
          workerFetchCoinQuotation,
        ),
        takeEvery(constants.FETCH_MENU_ACTION, workerFetchMenu),
      ])
      .finish()
      .isDone();
  });
});
