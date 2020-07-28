import { all, takeEvery, call, put, select } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import { fetchParticipantsService } from 'services/point-management/team-awards';
import { getProtectedRoles } from 'services/role/protectedRoles';
import fetchSubsidiariesService from 'services/establishment/getSubsidiaryList';
import { transformSubsidiariesRawData } from 'services/point-management/transformers/team-awards';
import { FetchSubsidiariesRawData } from 'services/point-management/team-awards';
import * as constants from './constants';
import {
  fetchSubsidiariesFailure,
  fetchSubsidiariesSuccess,
  fetchRolesFailure,
  fetchRolesSuccess,
  fetchParticipantsFailure,
  fetchParticipantsSuccess,
  setTotalForEachParticipantDistributedEqually,
  scoreAllParticipantsEqually,
  selectAllParticipants,
  deselectAllParticipants,
  assignPointsFailure,
  assignPointsSuccess,
  setTotalParticipants,
} from './actions';
import * as selectors from './selectors';
import { getSelectedEstablishment } from 'state/modules/point-management/common/selectors';
import { Role, ParticipantsList } from './types';
import { Establishment } from '../common/types';

export function* workerFetchSubsidiaries() {
  try {
    const selectedEstablishment: Establishment | null = yield select(
      getSelectedEstablishment,
    );

    if (!selectedEstablishment)
      throw 'Você não possui nenhum estabelecimento selecionado';

    const subsidiaries: FetchSubsidiariesRawData[] = yield call(
      fetchSubsidiariesService,
      selectedEstablishment.value,
    );

    const transformedSubsidiaries = transformSubsidiariesRawData(subsidiaries);
    yield put(fetchSubsidiariesSuccess(transformedSubsidiaries));
  } catch (error) {
    yield call(handlerErrors, error, fetchSubsidiariesFailure);
  }
}

export function* workerFetchRoles() {
  try {
    const roles: Role[] = yield call(getProtectedRoles);

    yield put(fetchRolesSuccess(roles));
  } catch (error) {
    yield call(handlerErrors, error, fetchRolesFailure);
  }
}

export function* workerFetchParticipants() {
  try {
    const subsidiaries: number[] | null = yield select(
      selectors.getSelectedSubsidiaries,
    );
    const roles: number[] | null = yield select(selectors.getSelectedRoles);
    const participantFinder: string = yield select(
      selectors.getParticipantFinder,
    );
    const selectedEstablishment: Establishment | null = yield select(
      getSelectedEstablishment,
    );

    if (!selectedEstablishment)
      throw 'Você não possui nenhum estabelecimento selecionado';

    const { participants, totalParticipants }: {
      participants: ParticipantsList | null;
      totalParticipants: number;
    } = yield call(
      fetchParticipantsService,
      selectedEstablishment.value,
      {
        subsidiaries,
        roles,
        participantFinder,
      },
    );

    yield put(setTotalParticipants(totalParticipants));
    yield put(fetchParticipantsSuccess(participants));
  } catch (error) {
    yield call(handlerErrors, error, fetchParticipantsFailure);
  }
}

export function* workerAssignPoints() {
  try {
    const hasEnoughScore: boolean = yield select(selectors.getHasEnoughScore);
    if (!hasEnoughScore)
      throw 'Você não possui saldo suficiente para atribuir estes pontos';

    const distributeEqually: boolean = yield select(
      selectors.getDistributeEqually,
    );
    if (!distributeEqually) {
      yield put(assignPointsSuccess());
      return;
    }

    const totalForEachParticipantDistributedEqually: number = yield select(
      selectors.getTotalForEachParticipantDistributedEqually,
    );

    yield put(
      scoreAllParticipantsEqually(totalForEachParticipantDistributedEqually),
    );
    yield put(assignPointsSuccess());
  } catch (error) {
    yield call(handlerErrors, error, assignPointsFailure);
  }
}

export function* workerDistributeEqually() {
  const distributeEqually: boolean = yield select(
    selectors.getDistributeEqually,
  );

  const participantsTotal = yield select(
    selectors.getSelectedParticipantsWithoutScore,
  );

  if (!distributeEqually || !participantsTotal) {
    yield put(setTotalForEachParticipantDistributedEqually(null));
    return;
  }

  const pointsToDistribute = yield select(selectors.getPointsToDistribute);

  const points = pointsToDistribute / participantsTotal;
  yield put(setTotalForEachParticipantDistributedEqually(points));
}

interface IWorkerSetSelectedRolesAll {
  type: typeof constants.SET_SELECTED_ROLES_ALL;
  meta: { role: string };
}
export function* workerSetSelectedRolesAll({
  meta: { role },
}: IWorkerSetSelectedRolesAll) {
  const selectedRolesAll: string[] | null = yield select(
    selectors.getSelectedRolesAll,
  );

  if (selectedRolesAll && selectedRolesAll.includes(role)) {
    yield put(selectAllParticipants(role));
    return;
  }

  yield put(deselectAllParticipants(role));
}

export default function* teamAwardsSagas() {
  yield all([
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
    takeEvery<IWorkerSetSelectedRolesAll>(
      constants.SET_SELECTED_ROLES_ALL,
      workerSetSelectedRolesAll,
    ),
  ]);
}
