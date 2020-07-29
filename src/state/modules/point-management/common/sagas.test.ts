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
    it('fetch establishments with more than one', async () => {
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

    it('fetch establishments with one', async () => {
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
        .put(actions.setEstablishmentType(rawEstablishments[0].type.name))
        .returns(undefined)
        .dispatch(actions.fetchEstablishments())
        .hasFinalState({
          ...initialState,
          establishments: null,
          establishmentType: rawEstablishments[0].type.name,
          selectedEstablishment: establishments[0],
        })
        .run();
    });

    it('fetch establishments without data', async () => {
      const error = 'Você não possui estabelecimentos';

      await expectSaga(workerFetchEstablishments)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(fetchEstablishmentsService), null]])
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
    it('fetch points to distribute with happy way', async () => {
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

    it('fetch points to distribute without selected establishment', async () => {
      const error = 'Você não selecionou nenhum estabelecimento';

      await expectSaga(workerFetchPointsToDistribute)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[select(selectors.getSelectedEstablishment), null]])
        .not.call.fn(fetchTotalPointsToDistributeService)
        .call(handlerErrors, error, actions.fetchPointsToDistributeFailure)
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

    it('fetch points to distribute with empty return', async () => {
      const error = 'Você não possui pontos a serem distribuidos';

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
        .call(handlerErrors, error, actions.fetchPointsToDistributeFailure)
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
    it('should handle with resale coopeartive and team award points', async () => {
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

    it('should handle with autonomy to distribute points', async () => {
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

    it('should handle with resale coopeartive points only', async () => {
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
    it('without autonomy to distribute, allow start distribution', async () => {
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

    it('with autonomy to distribute, not allow start distribution', async () => {
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
    it('should call to distribute points with happy way', async () => {
      await expectSaga(workerVerifyDistributePointsPossibility)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(getIsEnabledToRescue), true],
          [select(getIsEnabledToDistributePoints), true],
          [
            select(selectors.getEstablishmentType),
            rawEstablishments[0].type.name,
          ],
          [select(getMissingParticipants), 0],
          [matchers.call.fn(workerDistributePoints), null],
        ])
        .select(getIsEnabledToRescue)
        .select(getIsEnabledToDistributePoints)
        .select(selectors.getEstablishmentType)
        .select(getMissingParticipants)
        .call(workerDistributePoints)
        .dispatch(actions.distributePoints())
        .hasFinalState(initialState)
        .run();
    });

    it('should throw an error when try distribute without permission to rescue resale/cooperative', async () => {
      await expectSaga(workerVerifyDistributePointsPossibility)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(getIsEnabledToRescue), false],
          [select(getIsEnabledToDistributePoints), true],
          [
            select(selectors.getEstablishmentType),
            rawEstablishments[0].type.name,
          ],
        ])
        .select(getIsEnabledToRescue)
        .select(getIsEnabledToDistributePoints)
        .select(selectors.getEstablishmentType)
        .not.call.fn(workerDistributePoints)
        .dispatch(actions.distributePoints())
        .hasFinalState({
          ...initialState,
          distributePoints: {
            isFetching: false,
            error: `É necessário distribuir todos os pontos para ${rawEstablishments[0].type.name} antes de finalizar`,
          },
        })
        .run();
    });

    it('should throw an error when try distribute without scored participants', async () => {
      await expectSaga(workerVerifyDistributePointsPossibility)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(getIsEnabledToRescue), true],
          [select(getIsEnabledToDistributePoints), false],
          [
            select(selectors.getEstablishmentType),
            rawEstablishments[0].type.name,
          ],
        ])
        .select(getIsEnabledToRescue)
        .select(getIsEnabledToDistributePoints)
        .select(selectors.getEstablishmentType)
        .not.call.fn(workerDistributePoints)
        .dispatch(actions.distributePoints())
        .hasFinalState({
          ...initialState,
          distributePoints: {
            isFetching: false,
            error: `É necessário distribuir todos os pontos para a equipe antes de finalizar`,
          },
        })
        .run();
    });

    it('should open modal missing participants', async () => {
      await expectSaga(workerVerifyDistributePointsPossibility)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(getIsEnabledToRescue), true],
          [select(getIsEnabledToDistributePoints), true],
          [
            select(selectors.getEstablishmentType),
            rawEstablishments[0].type.name,
          ],
          [select(getMissingParticipants), 1],
        ])
        .select(getIsEnabledToRescue)
        .select(getIsEnabledToDistributePoints)
        .select(selectors.getEstablishmentType)
        .select(getMissingParticipants)
        .put(toggleIsOpenModalMissingParticipants())
        .returns(undefined)
        .not.call.fn(workerDistributePoints)
        .dispatch(actions.distributePoints())
        .hasFinalState(initialState)
        .run();
    });
  });

  describe('workerDistributePoints', () => {
    it('should distribute points with happy way', async () => {
      const dataDistribution = transformScoredParticipantsToDataDistribution({
        scoredParticipants: teamAwardsMock.scoredParticipants,
        establishmentId: selectedEstablishment.value,
        invoicePoints: 1000,
        marketplacePoints: 500,
        pointsToDistribute,
      });

      await expectSaga(workerDistributePoints)
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
        .put(actions.setFinishedDistribution())
        .dispatch(actions.distributePointsFinally())
        .hasFinalState({
          ...initialState,
          finishedDistribution: true,
        })
        .run();
    });
  });

  describe('workerFinishedDistribution', () => {
    it('should put any actions after finish distribution', async () => {
      await expectSaga(workerFinishedDistribution)
        .withReducer(reducer)
        .withState(initialState)
        .put(removeAllScores())
        .put(actions.setTotalPointsTeamAwards(0))
        .put(actions.setTotalPointsResaleCooperative(0))
        .put(setInvoicePoints(0))
        .put(setMarketplacePoints(0))
        .dispatch(actions.setFinishedDistribution())
        .hasFinalState(initialState)
        .run();
    });
  });

  it('main saga takes actions', () => {
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
      ])
      .finish()
      .isDone();
  });
});
