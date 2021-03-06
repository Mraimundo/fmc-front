import { takeEvery, select } from 'redux-saga/effects';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import { handlerErrors } from 'util/handler-errors';
import { fetchParticipantsService } from 'services/point-management/team-awards';
import fetchSubsidiariesService from 'services/establishment/getSubsidiaryList';
import { getProtectedRoles } from 'services/role/protectedRoles';
import { getSelectedEstablishment } from 'state/modules/point-management/common/selectors';
import * as constants from './constants';
import * as actions from './actions';
import * as selectors from './selectors';
import mainSaga, {
  workerFetchSubsidiaries,
  workerFetchRoles,
  workerFetchParticipants,
  workerAssignPoints,
  workerDistributeEqually,
  workerSetSelectedRolesAll,
} from './sagas';
import {
  subsidiaries,
  roles,
  participants,
  selectedSubsidiaries,
  selectedRoles,
  scoredParticipants,
  waitingScoredParticipants,
  selectedParticipants,
} from './mock';
import { selectedEstablishment } from '../common/mock';
import {
  migrateWaitingScoredToScored,
  selectAllParticipantsByRole,
  deselectAllParticipants,
} from './utils';
import reducer, { initialState } from './reducer';

describe('src/state/modules/point-management/team-awards/sagas', () => {
  describe('workerFetchSubsidiaries', () => {
    test('fetch subsidiaries with happy way', async () => {
      await expectSaga(workerFetchSubsidiaries)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(getSelectedEstablishment), selectedEstablishment],
          [matchers.call.fn(fetchSubsidiariesService), subsidiaries],
        ])
        .call(fetchSubsidiariesService, selectedEstablishment.value)
        .put(actions.fetchSubsidiariesSuccess(subsidiaries))
        .dispatch(actions.fetchSubsidiaries())
        .hasFinalState({
          ...initialState,
          subsidiaries,
          fetchSubsidiaries: {
            isFetching: false,
          },
        })
        .run();
    });

    test('try fetch subsidiaries without selected establishments', async () => {
      const error = 'Voc?? n??o possui nenhum estabelecimento selecionado';

      await expectSaga(workerFetchSubsidiaries)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[select(getSelectedEstablishment), null]])
        .call(handlerErrors, new Error(error), actions.fetchSubsidiariesFailure)
        .put(actions.fetchSubsidiariesFailure(error))
        .dispatch(actions.fetchSubsidiaries())
        .hasFinalState({
          ...initialState,
          fetchSubsidiaries: {
            isFetching: false,
            error,
          },
        })
        .run();
    });
  });

  describe('workerFetchRoles', () => {
    test('fetch roles', async () => {
      await expectSaga(workerFetchRoles)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[matchers.call.fn(getProtectedRoles), roles]])
        .call(getProtectedRoles)
        .put(actions.fetchRolesSuccess(roles))
        .dispatch(actions.fetchRoles())
        .hasFinalState({
          ...initialState,
          roles,
          fetchRoles: {
            isFetching: false,
          },
        })
        .run();
    });
  });

  describe('workerFetchParticipants', () => {
    const params = {
      subsidiaries: selectedSubsidiaries,
      roles: selectedRoles,
      participantFinder: 'Gabriel',
    };

    test('fetch participants', async () => {
      await expectSaga(workerFetchParticipants)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getSelectedSubsidiaries), selectedSubsidiaries],
          [select(selectors.getSelectedRoles), selectedRoles],
          [select(selectors.getParticipantFinder), 'Gabriel'],
          [select(getSelectedEstablishment), selectedEstablishment],
          [
            matchers.call.fn(fetchParticipantsService),
            { participants, totalParticipants: 2 },
          ],
        ])
        .call(fetchParticipantsService, selectedEstablishment.value, params)
        .put(actions.setTotalParticipants(2))
        .put(actions.fetchParticipantsSuccess(participants))
        .dispatch(actions.fetchParticipants())
        .hasFinalState({
          ...initialState,
          participants,
          totalParticipants: 2,
          fetchParticipants: {
            isFetching: false,
          },
        })
        .run();
    });

    test('try fetch participants without selected establishment', async () => {
      const error = 'Voc?? n??o possui nenhum estabelecimento selecionado';

      await expectSaga(workerFetchParticipants)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getSelectedSubsidiaries), selectedSubsidiaries],
          [select(selectors.getSelectedRoles), selectedRoles],
          [select(selectors.getParticipantFinder), 'Gabriel'],
          [select(getSelectedEstablishment), null],
        ])
        .call(handlerErrors, new Error(error), actions.fetchParticipantsFailure)
        .put(actions.fetchParticipantsFailure(error))
        .dispatch(actions.fetchParticipants())
        .hasFinalState({
          ...initialState,
          fetchParticipants: {
            isFetching: false,
            error,
          },
        })
        .run();
    });
  });

  describe('workerAssignPoints', () => {
    test('try assign points without enought score', async () => {
      const error =
        'Voc?? n??o possui saldo suficiente para atribuir estes pontos';

      await expectSaga(workerAssignPoints)
        .withReducer(reducer)
        .withState(initialState)
        .provide([[select(selectors.getHasEnoughScore), false]])
        .call(handlerErrors, new Error(error), actions.assignPointsFailure)
        .put(actions.assignPointsFailure(error))
        .dispatch(actions.assignPoints())
        .hasFinalState({
          ...initialState,
          assignPoints: {
            isFetching: false,
            error,
          },
        })
        .run();
    });

    test('assign points process without distribute equally', async () => {
      await expectSaga(workerAssignPoints)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getHasEnoughScore), true],
          [select(selectors.getDistributeEqually), false],
        ])
        .put(actions.assignPointsSuccess())
        .dispatch(actions.assignPoints())
        .hasFinalState({
          ...initialState,
          distributeEqually: false,
          pointsToDistribute: 0,
          selectedParticipants: null,
          selectedRolesAll: null,
          totalForEachParticipantDistributedEqually: null,
          scoredParticipants: migrateWaitingScoredToScored(
            waitingScoredParticipants,
            scoredParticipants,
          ),
          waitingScoredParticipants: null,
          assignPoints: {
            isFetching: false,
          },
        })
        .run();
    });

    test('assign points process distribute equally rule', async () => {
      await expectSaga(workerAssignPoints)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getHasEnoughScore), true],
          [select(selectors.getDistributeEqually), true],
          [
            select(selectors.getTotalForEachParticipantDistributedEqually),
            2000,
          ],
        ])
        .put(actions.scoreAllParticipantsEqually(2000))
        .put(actions.assignPointsSuccess())
        .dispatch(actions.assignPoints())
        .hasFinalState({
          ...initialState,
          distributeEqually: false,
          pointsToDistribute: 0,
          selectedParticipants: null,
          selectedRolesAll: null,
          totalForEachParticipantDistributedEqually: null,
          scoredParticipants: migrateWaitingScoredToScored(
            waitingScoredParticipants,
            scoredParticipants,
          ),
          waitingScoredParticipants: null,
          assignPoints: {
            isFetching: false,
          },
        })
        .run();
    });
  });

  describe('workerDistributeEqually', () => {
    test('distribute equally process with distribute equally false and without select participants', async () => {
      await expectSaga(workerDistributeEqually)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getDistributeEqually), false],
          [select(selectors.getSelectedParticipantsWithoutScore), null],
        ])
        .put(actions.setTotalForEachParticipantDistributedEqually(null))
        .dispatch(actions.toggleDistributeEqually())
        .hasFinalState(initialState)
        .run();
    });

    test('distribute equally process with happy way', async () => {
      await expectSaga(workerDistributeEqually)
        .withReducer(reducer)
        .withState(initialState)
        .provide([
          [select(selectors.getDistributeEqually), true],
          [select(selectors.getSelectedParticipantsWithoutScore), 10],
          [select(selectors.getPointsToDistribute), 1000],
        ])
        .put(actions.setTotalForEachParticipantDistributedEqually(100))
        .dispatch(actions.toggleDistributeEqually())
        .hasFinalState({
          ...initialState,
          totalForEachParticipantDistributedEqually: 100,
        })
        .run();
    });
  });

  describe('workerSetSelectedRolesAll', () => {
    const role = 'Supervisor';

    test('select all participants by role string', async () => {
      await expectSaga(workerSetSelectedRolesAll, {
        meta: {
          role,
        },
        type: constants.SET_SELECTED_ROLES_ALL,
      })
        .withReducer(reducer)
        .withState(initialState)
        .provide([[select(selectors.getSelectedRolesAll), ['Supervisor']]])
        .put(actions.selectAllParticipants(role))
        .dispatch(actions.setSelectedRolesAll(role))
        .hasFinalState({
          ...initialState,
          selectedParticipants: selectAllParticipantsByRole({
            participants,
            role,
            scoredParticipants,
            selectedParticipants,
          }),
        })
        .run();
    });

    test('deselect all participants by role string', async () => {
      await expectSaga(workerSetSelectedRolesAll, {
        meta: {
          role,
        },
        type: constants.SET_SELECTED_ROLES_ALL,
      })
        .withReducer(reducer)
        .withState(initialState)
        .provide([[select(selectors.getSelectedRolesAll), null]])
        .put(actions.deselectAllParticipants(role))
        .dispatch(actions.setSelectedRolesAll(role))
        .hasFinalState({
          ...initialState,
          selectedParticipants: deselectAllParticipants(
            selectedParticipants,
            participants,
            role,
          ),
        })
        .run();
    });
  });

  test('main saga takes actions', () => {
    testSaga(mainSaga)
      .next()
      .all([
        takeEvery(constants.FETCH_SUBSIDIARIES_ACTION, workerFetchSubsidiaries),
        takeEvery(constants.FETCH_ROLES_ACTION, workerFetchRoles),
        takeEvery(
          [
            constants.FETCH_PARTICIPANTS_ACTION,
            constants.SELECT_SUBSIDIARY,
            constants.SELECT_ROLE,
            constants.SET_PARTICIPANT_FINDER,
          ],
          workerFetchParticipants,
        ),
        takeEvery(constants.ASSIGN_POINTS_ACTION, workerAssignPoints),
        takeEvery(
          [
            constants.TOGGLE_DISTRIBUTE_EQUALLY,
            constants.TOGGLE_SELECTED_PARTICIPANT,
            constants.SELECT_ALL_PARTICIPANTS,
            constants.DESELECT_ALL_PARTICIPANTS,
          ],
          workerDistributeEqually,
        ),
        takeEvery(constants.SET_SELECTED_ROLES_ALL, workerSetSelectedRolesAll),
      ])
      .finish()
      .isDone();
  });
});
