import { takeEvery } from 'redux-saga/effects';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import { fetchBannersService } from 'services/home';
import { handlerErrors } from 'util/handler-errors';
import * as constants from './constants';
import * as actions from './actions';
import reducer, { initialState } from './reducer';
import mainSaga, { workerFetchBanners } from './sagas';
import { banners } from './mock';

describe('src/state/modules/home/sagas', () => {
  describe('workerFetchBanners', () => {
    test('should fetch banners', async () => {
      await expectSaga(workerFetchBanners)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(fetchBannersService), banners]])
        .call(fetchBannersService)
        .put(actions.fetchBannersSuccess(banners))
        .dispatch(actions.fetchBanners())
        .hasFinalState({
          ...initialState,
          banners,
        })
        .run();
    });

    test('should throw error', async () => {
      const error = 'Não foi encontrado nenhum banner';

      await expectSaga(workerFetchBanners)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(fetchBannersService), null]])
        .call(fetchBannersService)
        .call(handlerErrors, new Error(error), actions.fetchBannersFailure)
        .put(actions.fetchBannersFailure(error))
        .dispatch(actions.fetchBanners())
        .hasFinalState({
          ...initialState,
          fetchBanners: {
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
      .all([takeEvery(constants.FETCH_BANNERS_ACTION, workerFetchBanners)])
      .finish()
      .isDone();
  });
});
