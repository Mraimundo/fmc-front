import { all, takeEvery, call, put, select } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import { setMaxInvoicePercentage } from 'state/modules/point-management/resale-cooperative/actions';
import { transformScoredParticipantsToDataDistribution } from 'services/point-management/transformers/common';
import { distributePointsService } from 'services/point-management/common';
import { fetchTotalPointsToDistributeService } from 'services/point-management/common';
import {
  getSelectedEstablishment,
  getPointsToDistribute,
} from 'state/modules/point-management/common/selectors';
import {
  getInvoicePoints,
  getMarketplacePoints,
  getIsEnabledToRescue,
} from 'state/modules/point-management/resale-cooperative/selectors';
import {
  getScoredParticipants,
  getIsEnabledToDistributePoints,
} from 'state/modules/point-management/team-awards/selectors';
import fetchEstablishmentsService, {
  Establishment as IEstablishment,
} from 'services/auth/getEstablishments';
import {
  FETCH_ESTABLISHMENTS_ACTION,
  FETCH_POINTS_TO_DISTRIBUTE_ACTION,
  SET_IS_READY_TO_DISTRIBUTE,
  SET_SELECTED_ESTABLISHMENT,
  DISTRIBUTE_POINTS_ACTION,
} from './constants';
import * as selectors from './selectors';
import * as actions from './actions';
import { PointsToDistribute, Establishment, EstablishmentType } from './types';
import { ScoredParticipant } from '../team-awards/types';

export function* workerFetchEstablishments() {
  try {
    const establishments: IEstablishment[] = yield call(
      fetchEstablishmentsService,
    );

    if (!establishments) throw 'Você não possui estabelecimentos';

    const transformedEstablishments: Establishment[] = establishments.map(
      ({ id, name }: IEstablishment): Establishment => ({
        value: `${id}`,
        title: name,
      }),
    );

    if (establishments.length === 1) {
      const [establishment]: Establishment[] = transformedEstablishments;
      yield put(actions.setSelectedEstablishment(establishment));
      yield put(actions.setEstablishmentType(establishments[0].type.name));
      return;
    }

    yield put(actions.fetchEstablishmentsSuccess(transformedEstablishments));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchEstablishmentsFailure);
  }
}

export function* workerFetchPointsToDistribute() {
  try {
    const selectedEstablishment: Establishment | null = yield select(
      selectors.getSelectedEstablishment,
    );

    if (!selectedEstablishment)
      throw 'Você não selecionou nenhum estabelecimento';

    const pointsToDistribute: PointsToDistribute = yield call(
      fetchTotalPointsToDistributeService,
      selectedEstablishment.value,
    );

    if (!pointsToDistribute)
      throw 'Você não possui pontos a serem distribuidos';

    yield put(actions.fetchPointsToDistributeSuccess(pointsToDistribute));
    yield call(workerAfterGetPointsToDistribution);
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchPointsToDistributeFailure);
  }
}

export function* workerSetIsReadyToDistribute() {
  const { resaleCooperative, teamAwards }: PointsToDistribute = yield select(
    selectors.getPointsToDistribute,
  );

  yield put(
    setMaxInvoicePercentage(resaleCooperative?.maxInvoicePercentage || 0),
  );

  const hasAutonomyToDistribute = yield select(
    selectors.getHasAutonomyToDistribute,
  );

  if (hasAutonomyToDistribute) return;

  yield put(
    actions.setTotalPointsResaleCooperative(resaleCooperative?.points || 0),
  );

  const isResaleCooperativeAndTeamAwardPoints = yield select(
    selectors.getIsResaleCooperativeAndTeamAwardPoints,
  );

  if (isResaleCooperativeAndTeamAwardPoints) {
    yield put(actions.setTotalPointsTeamAwards(teamAwards?.points || 0));
  }
}

export function* workerAfterGetPointsToDistribution() {
  const hasAutonomyToDistribute = yield select(
    selectors.getHasAutonomyToDistribute,
  );

  if (!hasAutonomyToDistribute) {
    yield put(actions.setIsReadyToDistribute(true));
  }
}

export function* workerDistributePoints() {
  try {
    const isEnabledToRescue: boolean = yield select(getIsEnabledToRescue);
    const isEnabledToDistributePoints: boolean = yield select(
      getIsEnabledToDistributePoints,
    );
    const establishmentType: EstablishmentType | '' = yield select(
      selectors.getEstablishmentType,
    );

    if (!isEnabledToRescue)
      throw `É necessário distribuir todos os pontos para ${establishmentType} antes de finalizar`;
    if (!isEnabledToDistributePoints)
      throw 'É necessário distribuir todos os pontos para a equipe antes de finalizar';

    const scoredParticipants: ScoredParticipant[] = yield select(
      getScoredParticipants,
    );
    const selectedEstablishment: Establishment = yield select(
      getSelectedEstablishment,
    );
    const invoicePoints: number = yield select(getInvoicePoints);
    const marketplacePoints: number = yield select(getMarketplacePoints);
    const pointsToDistribute: PointsToDistribute = yield select(
      getPointsToDistribute,
    );

    const dataDistribuion = transformScoredParticipantsToDataDistribution({
      scoredParticipants,
      establishmentId: selectedEstablishment.value,
      invoicePoints,
      marketplacePoints,
      pointsToDistribute,
    });

    yield call<any>(distributePointsService, dataDistribuion);
    yield put(actions.distributePointsSuccess());
    yield put(actions.setFinishedDistribution());
  } catch (error) {
    yield call(handlerErrors, error, actions.distributePointsFailure);
  }
}

export default function* commonSagas() {
  yield all([
    takeEvery(FETCH_ESTABLISHMENTS_ACTION, workerFetchEstablishments),
    takeEvery(
      [FETCH_POINTS_TO_DISTRIBUTE_ACTION, SET_SELECTED_ESTABLISHMENT],
      workerFetchPointsToDistribute,
    ),
    takeEvery(SET_IS_READY_TO_DISTRIBUTE, workerSetIsReadyToDistribute),
    takeEvery(DISTRIBUTE_POINTS_ACTION, workerDistributePoints),
  ]);
}
