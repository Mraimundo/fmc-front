import { takeEvery, select } from 'redux-saga/effects';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import { handlerErrors } from 'util/handler-errors';
import fetchEstablishmentsService from 'services/auth/getEstablishments';
import {
  fetchTotalPointsToDistributeService,
  distributePointsService,
} from 'services/point-management/common';
import {
  getIsEnabledToRescue,
  getInvoicePoints,
  getMarketplacePoints,
} from 'state/modules/point-management/resale-cooperative/selectors';
import {
  getIsEnabledToDistributePoints,
  getMissingParticipants,
  getScoredParticipants,
} from 'state/modules/point-management/team-awards/selectors';
import {
  toggleIsOpenModalMissingParticipants,
  removeAllScores,
} from 'state/modules/point-management/team-awards/actions';
import { transformScoredParticipantsToDataDistribution } from 'services/point-management/transformers/common';
import teamAwardsMock from 'state/modules/point-management/team-awards/mock';
import {
  setMaxInvoicePercentage,
  setMarketplacePoints,
  setInvoicePoints,
} from 'state/modules/point-management/resale-cooperative/actions';
import mainSaga, {
  workerFetchEstablishments,
  workerFetchPointsToDistribute,
  workerSetIsReadyToDistribute,
  workerAfterGetPointsToDistribution,
  workerVerifyDistributePointsPossibility,
  workerDistributePoints,
  workerFinishedDistribution,
  cleanResaleCooperative,
  cleanTeamAwards,
  workerSavePartialDistribution,
  workerSetDistributionWithSavedSettings,
  workerCleanDistributionState,
} from './sagas';
import {
  establishments,
  rawEstablishments,
  pointsToDistribute,
  selectedEstablishment,
} from './mock';
import * as actions from './actions';
import * as constants from './constants';
import * as selectors from './selectors';
import reducer, { initialState, emptyPointsToDistribute } from './reducer';

describe('src/state/modules/point-management/common/sagas', () => {
  describe('workerFetchEstablishments', () => {
    test('fetch establishments with more than one', async () => {
      await expectSaga(workerFetchEstablishments)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [matchers.call.fn(fetchEstablishmentsService), rawEstablishments],
        ])
        .put(actions.fetchEstablishmentsSuccess(establishments))
        .dispatch(actions.fetchEstablishments())
        .hasFinalState({
          ...initialState,
          establishments,
          fetchEstablishments: {
            isFetching: false,
          },
        })
        .run();
    });

    test('fetch establishments with one', async () => {
      await expectSaga(workerFetchEstablishments)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [
            matchers.call.fn(fetchEstablishmentsService),
            [rawEstablishments[0]],
          ],
        ])
        .put(actions.setSelectedEstablishment(establishments[0]))
        .returns(undefined)
        .dispatch(actions.fetchEstablishments())
        .hasFinalState({
          ...initialState,
          establishments: null,
          selectedEstablishment: establishments[0],
        })
        .run();
    });

    test('fetch establishments without data', async () => {
      const error = 'Voc?? n??o possui estabelecimentos';

      await expectSaga(workerFetchEstablishments)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(fetchEstablishmentsService), null]])
        .call(
          handlerErrors,
          new Error(error),
          actions.fetchEstablishmentsFailure,
        )
        .put(actions.fetchEstablishmentsFailure(error))
        .dispatch(actions.fetchEstablishments())
        .hasFinalState({
          ...initialState,
          fetchEstablishments: {
            isFetching: false,
            error,
          },
          establishments: null,
          selectedEstablishment: null,
        })
        .run();
    });
  });

  describe('workerFetchPointsToDistribute', () => {
    test('fetch points to distribute with happy way', async () => {
      await expectSaga(workerFetchPointsToDistribute)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getSelectedEstablishment), selectedEstablishment],
          [
            matchers.call.fn(fetchTotalPointsToDistributeService),
            pointsToDistribute,
          ],
          [matchers.call.fn(workerAfterGetPointsToDistribution), null],
        ])
        .select(selectors.getSelectedEstablishment)
        .call(fetchTotalPointsToDistributeService, selectedEstablishment.value)
        .call(workerAfterGetPointsToDistribution)
        .put(actions.fetchPointsToDistributeSuccess(pointsToDistribute))
        .dispatch(actions.fetchPointsToDistribute())
        .hasFinalState({
          ...initialState,
          pointsToDistribute,
          fetchPointsToDistribute: {
            isFetching: false,
          },
        })
        .run();
    });

    test('fetch points to distribute without selected establishment', async () => {
      const error = 'Voc?? n??o selecionou nenhum estabelecimento';

      await expectSaga(workerFetchPointsToDistribute)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[select(selectors.getSelectedEstablishment), null]])
        .not.call.fn(fetchTotalPointsToDistributeService)
        .call(
          handlerErrors,
          new Error(error),
          actions.fetchPointsToDistributeFailure,
        )
        .put(actions.fetchPointsToDistributeFailure(error))
        .dispatch(actions.fetchPointsToDistribute())
        .hasFinalState({
          ...initialState,
          pointsToDistribute: emptyPointsToDistribute,
          fetchPointsToDistribute: {
            isFetching: false,
            error,
          },
        })
        .run();
    });

    test('fetch points to distribute with empty return', async () => {
      const error = 'Voc?? n??o possui pontos a serem distribuidos';

      await expectSaga(workerFetchPointsToDistribute)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getSelectedEstablishment), selectedEstablishment],
          [matchers.call.fn(fetchTotalPointsToDistributeService), null],
        ])
        .call(fetchTotalPointsToDistributeService, selectedEstablishment.value)
        .not.call.fn(workerAfterGetPointsToDistribution)
        .put(actions.fetchPointsToDistributeFailure(error))
        .call(
          handlerErrors,
          new Error(error),
          actions.fetchPointsToDistributeFailure,
        )
        .dispatch(actions.fetchPointsToDistribute())
        .hasFinalState({
          ...initialState,
          pointsToDistribute: emptyPointsToDistribute,
          fetchPointsToDistribute: {
            isFetching: false,
            error,
          },
        })
        .run();
    });
  });

  describe('workerSetIsReadyToDistribute', () => {
    test('should handle with resale coopeartive and team award points', async () => {
      await expectSaga(workerSetIsReadyToDistribute)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getPointsToDistribute), pointsToDistribute],
          [select(selectors.getHasAutonomyToDistribute), false],
          [select(selectors.getIsResaleCooperativeAndTeamAwardPoints), true],
        ])
        .put(setMaxInvoicePercentage(20))
        .put(actions.setTotalPointsResaleCooperative(1500))
        .put(actions.setTotalPointsTeamAwards(0))
        .dispatch(actions.setIsReadyToDistribute(true))
        .hasFinalState({
          ...initialState,
          totalPointsResaleCooperative: 1500,
          totalPointsTeamAwards: 0,
        })
        .run();
    });

    test('should handle with autonomy to distribute points', async () => {
      await expectSaga(workerSetIsReadyToDistribute)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getPointsToDistribute), pointsToDistribute],
          [select(selectors.getHasAutonomyToDistribute), true],
        ])
        .put(setMaxInvoicePercentage(20))
        .returns(undefined)
        .dispatch(actions.setIsReadyToDistribute(true))
        .hasFinalState({
          ...initialState,
          totalPointsResaleCooperative: 0,
          totalPointsTeamAwards: 0,
        })
        .run();
    });

    test('should handle with resale coopeartive points only', async () => {
      await expectSaga(workerSetIsReadyToDistribute)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getPointsToDistribute), pointsToDistribute],
          [select(selectors.getHasAutonomyToDistribute), false],
          [select(selectors.getIsResaleCooperativeAndTeamAwardPoints), false],
        ])
        .put(setMaxInvoicePercentage(20))
        .put(actions.setTotalPointsResaleCooperative(1500))
        .dispatch(actions.setIsReadyToDistribute(true))
        .hasFinalState({
          ...initialState,
          totalPointsResaleCooperative: 1500,
          totalPointsTeamAwards: 0,
        })
        .run();
    });
  });

  describe('workerAfterGetPointsToDistribution', () => {
    test('without autonomy to distribute, allow start distribution', async () => {
      await expectSaga(workerAfterGetPointsToDistribution)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[select(selectors.getHasAutonomyToDistribute), false]])
        .select(selectors.getHasAutonomyToDistribute)
        .put(actions.setIsReadyToDistribute(true))
        .hasFinalState({
          ...initialState,
          isReadyToDistribute: true,
        })
        .run();
    });

    test('with autonomy to distribute, not allow start distribution', async () => {
      await expectSaga(workerAfterGetPointsToDistribution)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[select(selectors.getHasAutonomyToDistribute), true]])
        .select(selectors.getHasAutonomyToDistribute)
        .hasFinalState({
          ...initialState,
          isReadyToDistribute: false,
        })
        .run();
    });
  });

  describe('workerVerifyDistributePointsPossibility', () => {
    test('should call to distribute points with happy way', async () => {
      const { All } = constants.FinishedDistributionPossibilities;

      await expectSaga(workerVerifyDistributePointsPossibility, {
        type: constants.DISTRIBUTE_POINTS_ACTION,
        meta: { finishedDistributionPossibilities: All },
      })
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getTotalPointsResaleCooperative), 100],
          [select(getIsEnabledToRescue), true],
          [select(getIsEnabledToDistributePoints), true],
          [select(selectors.getSelectedEstablishment), establishments[0]],
          [select(getMissingParticipants), 0],
          [select(selectors.getTotalPointsTeamAwards), 100],
          [select(selectors.getIsResaleCooperativePointsOnly), false],
          [
            select(selectors.getPointsToDistribute),
            { allowPartialDistribution: false },
          ],
        ])
        .select(selectors.getTotalPointsResaleCooperative)
        .select(getIsEnabledToRescue)
        .select(getIsEnabledToDistributePoints)
        .select(selectors.getSelectedEstablishment)
        .select(getMissingParticipants)
        .select(selectors.getTotalPointsTeamAwards)
        .select(selectors.getIsResaleCooperativePointsOnly)
        .put(actions.distributePointsFinally(All))
        .dispatch(actions.distributePoints(All))
        .hasFinalState({
          ...initialState,
          distributePoints: { isFetching: true },
        })
        .run();
    });

    test('should throw an error when try distribute without permission to rescue resale/cooperative', async () => {
      const error = `?? necess??rio distribuir todos os pontos para ${establishments[0].type} antes de finalizar`;

      const { All } = constants.FinishedDistributionPossibilities;

      await expectSaga(workerVerifyDistributePointsPossibility, {
        type: constants.DISTRIBUTE_POINTS_ACTION,
        meta: { finishedDistributionPossibilities: All },
      })
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getTotalPointsResaleCooperative), 100],
          [select(getIsEnabledToRescue), false],
          [select(selectors.getSelectedEstablishment), establishments[0]],
          [
            select(selectors.getPointsToDistribute),
            { allowPartialDistribution: false },
          ],
        ])
        .select(selectors.getTotalPointsResaleCooperative)
        .select(getIsEnabledToRescue)
        .select(selectors.getSelectedEstablishment)
        .call(handlerErrors, new Error(error), actions.distributePointsFailure)
        .not.call.fn(workerDistributePoints)
        .dispatch(actions.distributePoints(All))
        .hasFinalState({
          ...initialState,
          distributePoints: {
            isFetching: false,
            error,
          },
        })
        .run();
    });

    test('should throw an error when try distribute without scored participants', async () => {
      const error = `?? necess??rio distribuir todos os pontos para a equipe antes de finalizar`;

      const { Ta } = constants.FinishedDistributionPossibilities;

      await expectSaga(workerVerifyDistributePointsPossibility, {
        type: constants.DISTRIBUTE_POINTS_ACTION,
        meta: { finishedDistributionPossibilities: Ta },
      })
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getTotalPointsResaleCooperative), 100],
          [select(getIsEnabledToRescue), true],
          [select(getIsEnabledToDistributePoints), false],
          [select(selectors.getSelectedEstablishment), establishments[0]],
          [select(selectors.getTotalPointsTeamAwards), 100],
          [select(selectors.getIsResaleCooperativePointsOnly), false],
          [
            select(selectors.getPointsToDistribute),
            { allowPartialDistribution: false },
          ],
        ])
        .select(selectors.getTotalPointsResaleCooperative)
        .select(getIsEnabledToRescue)
        .select(getIsEnabledToDistributePoints)
        .select(selectors.getSelectedEstablishment)
        .select(selectors.getTotalPointsTeamAwards)
        .select(selectors.getIsResaleCooperativePointsOnly)
        .call(handlerErrors, new Error(error), actions.distributePointsFailure)
        .not.call.fn(workerDistributePoints)
        .dispatch(actions.distributePoints(Ta))
        .hasFinalState({
          ...initialState,
          distributePoints: {
            isFetching: false,
            error,
          },
        })
        .run();
    });

    test('should open modal missing participants', async () => {
      const { Rc } = constants.FinishedDistributionPossibilities;
      await expectSaga(workerVerifyDistributePointsPossibility, {
        type: constants.DISTRIBUTE_POINTS_ACTION,
        meta: { finishedDistributionPossibilities: Rc },
      })
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getTotalPointsResaleCooperative), 100],
          [select(getIsEnabledToRescue), true],
          [select(getIsEnabledToDistributePoints), true],
          [select(selectors.getSelectedEstablishment), establishments[0]],
          [select(getMissingParticipants), 1],
          [select(selectors.getTotalPointsTeamAwards), 100],
          [select(selectors.getIsResaleCooperativePointsOnly), false],
          [
            select(selectors.getPointsToDistribute),
            { allowPartialDistribution: false },
          ],
        ])
        .select(selectors.getTotalPointsResaleCooperative)
        .select(getIsEnabledToRescue)
        .select(getIsEnabledToDistributePoints)
        .select(selectors.getSelectedEstablishment)
        .select(getMissingParticipants)
        .select(selectors.getTotalPointsTeamAwards)
        .select(selectors.getIsResaleCooperativePointsOnly)
        .put(toggleIsOpenModalMissingParticipants())
        .returns(undefined)
        .not.call.fn(workerDistributePoints)
        .dispatch(actions.distributePoints(Rc))
        .hasFinalState(initialState)
        .run();
    });
  });

  describe('workerDistributePoints', () => {
    test('should distribute points with happy way', async () => {
      const dataDistribution = transformScoredParticipantsToDataDistribution({
        scoredParticipants: teamAwardsMock.scoredParticipants,
        establishmentId: selectedEstablishment.value,
        invoicePoints: 1000,
        marketplacePoints: 500,
        pointsToDistribute,
      });

      const { All } = constants.FinishedDistributionPossibilities;

      await expectSaga(workerDistributePoints, {
        type: constants.DISTRIBUTE_POINTS_FINALLY_ACTION,
        meta: { finishedDistributionPossibilities: All },
      })
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(getScoredParticipants), teamAwardsMock.scoredParticipants],
          [select(selectors.getSelectedEstablishment), selectedEstablishment],
          [select(getInvoicePoints), 1000],
          [select(getMarketplacePoints), 500],
          [select(selectors.getPointsToDistribute), pointsToDistribute],
          [matchers.call.fn(distributePointsService), null],
        ])
        .select(getScoredParticipants)
        .select(selectors.getSelectedEstablishment)
        .select(getInvoicePoints)
        .select(getMarketplacePoints)
        .select(selectors.getPointsToDistribute)
        .call(distributePointsService, dataDistribution)
        .put(actions.distributePointsSuccess())
        .put(actions.setFinishedDistribution(All))
        .dispatch(actions.distributePointsFinally(All))
        .hasFinalState({
          ...initialState,
          finishedDistribution: 'all-finished',
        })
        .run();
    });
  });

  describe('workerFinishedDistribution', () => {
    test('should call saga to clean resale cooperative values', async () => {
      const { Rc } = constants.FinishedDistributionPossibilities;

      await expectSaga(workerFinishedDistribution)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getFinishedDistribution), Rc],
          [matchers.call.fn(cleanResaleCooperative), null],
        ])
        .call(cleanResaleCooperative)
        .dispatch(actions.setFinishedDistribution(Rc))
        .hasFinalState(initialState)
        .run();
    });

    test('should call saga to clean team awards values', async () => {
      const { Ta } = constants.FinishedDistributionPossibilities;

      await expectSaga(workerFinishedDistribution)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getFinishedDistribution), Ta],
          [matchers.call.fn(cleanTeamAwards), null],
        ])
        .call(cleanTeamAwards)
        .dispatch(actions.setFinishedDistribution(Ta))
        .hasFinalState(initialState)
        .run();
    });

    test('should call saga to clean all values', async () => {
      const { All } = constants.FinishedDistributionPossibilities;

      await expectSaga(workerFinishedDistribution)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getFinishedDistribution), All],
          [matchers.call.fn(cleanTeamAwards), null],
          [matchers.call.fn(cleanResaleCooperative), null],
        ])
        .call(cleanTeamAwards)
        .call(cleanResaleCooperative)
        .dispatch(actions.setFinishedDistribution(All))
        .hasFinalState(initialState)
        .run();
    });
  });

  test('main saga takes actions', () => {
    testSaga(mainSaga)
      .next()
      .all([
        takeEvery(
          constants.FETCH_ESTABLISHMENTS_ACTION,
          workerFetchEstablishments,
        ),
        takeEvery(
          [
            constants.FETCH_POINTS_TO_DISTRIBUTE_ACTION,
            constants.SET_SELECTED_ESTABLISHMENT,
          ],
          workerFetchPointsToDistribute,
        ),
        takeEvery(
          constants.SET_IS_READY_TO_DISTRIBUTE,
          workerSetIsReadyToDistribute,
        ),
        takeEvery(
          constants.DISTRIBUTE_POINTS_ACTION,
          workerVerifyDistributePointsPossibility,
        ),
        takeEvery(
          constants.DISTRIBUTE_POINTS_FINALLY_ACTION,
          workerDistributePoints,
        ),
        takeEvery(
          constants.SET_FINISHED_DISTRIBUTION,
          workerFinishedDistribution,
        ),
        takeEvery(
          constants.SAVE_PARTIAL_DISTRIBUTION_ACTION,
          workerSavePartialDistribution,
        ),
        takeEvery(
          constants.SET_DISTRIBUTION_WITH_SAVED_SETTINGS,
          workerSetDistributionWithSavedSettings,
        ),
        takeEvery(
          constants.CLEAN_DISTRIBUTION_STATE,
          workerCleanDistributionState,
        ),
      ])
      .finish()
      .isDone();
  });
});
