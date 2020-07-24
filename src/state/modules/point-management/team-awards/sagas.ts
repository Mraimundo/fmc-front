import { all, takeEvery, call, put, select } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import {
  fetchParticipantsService,
  distributePointsService,
} from 'services/point-management/team-awards';
import { getProtectedRoles } from 'services/role/protectedRoles';
import fetchSubsidiariesService from 'services/establishment/getSubsidiaryList';
import {
  transformSubsidiariesRawData,
  transformScoredParticipantsToDataDistribution,
} from 'services/point-management/transformers/team-awards';
import * as constants from './constants';
import {
  fetchSubsidiariesFailure,
  fetchSubsidiariesSuccess,
  fetchRolesFailure,
  fetchRolesSuccess,
  fetchParticipantsFailure,
  fetchParticipantsSuccess,
  setTotalForEachParticipantDistributedEqually,
  toggleDistributeEqually,
  setPointsToDistribute,
  scoreAllParticipantsEqually,
  selectAllParticipants,
  deselectAllParticipants,
  assignPointsFailure,
  assignPointsSuccess,
  distributePointsFailure,
  distributePointsSuccess,
  setSelectedRolesAll,
} from './actions';
import * as selectors from './selectors';
import { getSelectedEstablishment } from 'state/modules/point-management/common/selectors';
import { Subsidiary, Role, ParticipantsList } from './types';
import { Establishment } from '../common/types';
import {
  getInvoicePoints,
  getMarketplacePoints,
} from '../resale-cooperative/selectors';

export function* workerFetchSubsidiaries() {
  try {
    const selectedEstablishment: Establishment | null = yield select(
      getSelectedEstablishment,
    );

    if (!selectedEstablishment)
      throw 'Você não possui nenhum estabelecimento selecionado';

    const subsidiaries: Subsidiary[] = yield call(
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

    const participants: ParticipantsList = yield call(
      fetchParticipantsService,
      selectedEstablishment.value,
      {
        subsidiaries,
        roles,
        participantFinder,
      },
    );

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
  const selectedRolesAll: string[] | null = yield select(selectors.getSelectedRolesAll);

  if (selectedRolesAll && selectedRolesAll.includes(role)) {
    yield put(selectAllParticipants(role));
    // yield call(workerDistributeEqually);
    return;
  }

  yield put(deselectAllParticipants(role));
}

export function* workerDistributePoints() {
  try {
    const scoredParticipants = yield select(selectors.getScoredParticipants);
    const establishmentId = yield select(getSelectedEstablishment);
    const invoicePoints = yield select(getInvoicePoints);
    const marketplacePoints = yield select(getMarketplacePoints);

    const dataDistribuion = transformScoredParticipantsToDataDistribution({
      scoredParticipants,
      establishmentId,
      invoicePoints,
      marketplacePoints,
      pointId: 1,
    });

    const response = yield call<any>(distributePointsService, dataDistribuion);
    console.log('response on workerDistributePoints -> ', response);
  } catch (error) {
    yield call(handlerErrors, error, distributePointsFailure);
  }
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
    takeEvery(constants.DISTRIBUTE_POINTS_ACTION, workerDistributePoints),
  ]);
}
