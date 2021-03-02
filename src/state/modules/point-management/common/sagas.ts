import { all, takeEvery, call, put, select } from 'redux-saga/effects';

import { handlerErrors } from 'util/handler-errors';
import {
  setMaxInvoicePercentage,
  setInvoicePoints,
  setMarketplacePoints,
} from 'state/modules/point-management/resale-cooperative/actions';
import { transformScoredParticipantsToDataDistribution } from 'services/point-management/transformers/common';
import {
  distributePointsService,
  fetchTotalPointsToDistributeService,
  savePartialDistributionService,
} from 'services/point-management/common';
import {
  getSelectedEstablishment,
  getPointsToDistribute,
  getIsResaleCooperativePointsOnly,
  getTotalPointsResaleCooperative,
  getTotalPointsTeamAwards,
} from 'state/modules/point-management/common/selectors';
import {
  getInvoicePoints,
  getMarketplacePoints,
  getIsEnabledToRescue,
} from 'state/modules/point-management/resale-cooperative/selectors';
import {
  getScoredParticipants,
  getIsEnabledToDistributePoints,
  getMissingParticipants,
  getHasScoreParticipantsAdded,
} from 'state/modules/point-management/team-awards/selectors';
import {
  toggleIsOpenModalMissingParticipants,
  setWaitingScoredParticipants,
  assignPoints,
} from 'state/modules/point-management/team-awards/actions';
import fetchEstablishmentsService, {
  Establishment as IEstablishment,
} from 'services/auth/getEstablishments';
import {
  FETCH_ESTABLISHMENTS_ACTION,
  FETCH_POINTS_TO_DISTRIBUTE_ACTION,
  SET_IS_READY_TO_DISTRIBUTE,
  DISTRIBUTE_POINTS_ACTION,
  DISTRIBUTE_POINTS_FINALLY_ACTION,
  SET_FINISHED_DISTRIBUTION,
  SET_SELECTED_ESTABLISHMENT,
  FinishedDistributionPossibilities,
  SAVE_PARTIAL_DISTRIBUTION_ACTION,
  SET_DISTRIBUTION_WITH_SAVED_SETTINGS,
} from './constants';
import * as selectors from './selectors';
import * as actions from './actions';
import { PointsToDistribute, Establishment } from './types';
import { ScoredParticipant } from '../team-awards/types';

export function* workerFetchEstablishments() {
  try {
    const establishments: IEstablishment[] = yield call(
      fetchEstablishmentsService,
    );

    if (!establishments) {
      throw new Error('Você não possui estabelecimentos');
    }

    const transformedEstablishments: Establishment[] = establishments.map(
      ({ id, name, type }: IEstablishment): Establishment => ({
        value: `${id}`,
        title: name,
        type: type.name,
      }),
    );

    if (establishments.length === 1) {
      const [establishment]: Establishment[] = transformedEstablishments;
      yield put(actions.setSelectedEstablishment(establishment));
      return;
    }

    yield put(actions.fetchEstablishmentsSuccess(transformedEstablishments));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchEstablishmentsFailure);
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

export function* workerFetchPointsToDistribute() {
  try {
    const selectedEstablishment: Establishment | null = yield select(
      selectors.getSelectedEstablishment,
    );

    if (!selectedEstablishment) {
      throw new Error('Você não selecionou nenhum estabelecimento');
    }

    const pointsToDistribute: PointsToDistribute = yield call(
      fetchTotalPointsToDistributeService,
      selectedEstablishment.value,
    );

    if (!pointsToDistribute) {
      throw new Error('Você não possui pontos a serem distribuidos');
    }

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

interface WorkerDistributePoints {
  type: typeof DISTRIBUTE_POINTS_FINALLY_ACTION;
  meta: {
    finishedDistributionPossibilities: FinishedDistributionPossibilities;
  };
}
export function* workerDistributePoints({
  meta: { finishedDistributionPossibilities },
}: WorkerDistributePoints) {
  try {
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

    const dataDistribution = transformScoredParticipantsToDataDistribution({
      scoredParticipants,
      establishmentId: selectedEstablishment.value,
      invoicePoints,
      marketplacePoints,
      pointsToDistribute,
    });

    yield call<any>(distributePointsService, dataDistribution);
    yield all([
      put(actions.distributePointsSuccess()),
      put(actions.setFinishedDistribution(finishedDistributionPossibilities)),
    ]);
  } catch (error) {
    yield call(handlerErrors, error, actions.distributePointsFailure);
  }
}

interface WorkerVerifyDistributePointsPossibility {
  type: typeof DISTRIBUTE_POINTS_ACTION;
  meta: {
    finishedDistributionPossibilities: FinishedDistributionPossibilities;
  };
}
export function* workerVerifyDistributePointsPossibility({
  meta: { finishedDistributionPossibilities },
}: WorkerVerifyDistributePointsPossibility) {
  try {
    const pointsToDistribute: PointsToDistribute = yield select(
      selectors.getPointsToDistribute,
    );
    const totalPointsResaleCooperative: number = yield select(
      getTotalPointsResaleCooperative,
    );
    const isEnabledToRescue: boolean = yield select(getIsEnabledToRescue);
    const selectedEstablishment: Establishment = yield select(
      selectors.getSelectedEstablishment,
    );

    const { allowPartialDistribution } = pointsToDistribute;

    if (
      !isEnabledToRescue &&
      totalPointsResaleCooperative &&
      !allowPartialDistribution
    ) {
      throw new Error(
        `É necessário distribuir todos os pontos para ${selectedEstablishment.type} antes de finalizar`,
      );
    }

    const totalPointsTeamAwards: number = yield select(
      getTotalPointsTeamAwards,
    );
    const isResaleCooperativePointsOnly = yield select(
      getIsResaleCooperativePointsOnly,
    );
    const isEnabledToDistributePoints: boolean = yield select(
      getIsEnabledToDistributePoints,
    );

    if (
      !isResaleCooperativePointsOnly &&
      !isEnabledToDistributePoints &&
      totalPointsTeamAwards &&
      !allowPartialDistribution
    ) {
      throw new Error(
        'É necessário distribuir todos os pontos para a equipe antes de finalizar',
      );
    }

    const missingParticipants: number = yield select(getMissingParticipants);
    if (missingParticipants > 0) {
      yield put(toggleIsOpenModalMissingParticipants());
      return;
    }

    yield put(
      actions.distributePointsFinally(finishedDistributionPossibilities),
    );
  } catch (error) {
    yield call(handlerErrors, error, actions.distributePointsFailure);
  }
}

export function* cleanResaleCooperative() {
  yield put(actions.setTotalPointsResaleCooperative(0));
  yield put(setInvoicePoints(0));
  yield put(setMarketplacePoints(0));
}

export function* cleanTeamAwards() {
  yield put(actions.setTotalPointsResaleCooperative(0));
  yield put(setInvoicePoints(0));
  yield put(setMarketplacePoints(0));
}

export function* workerFinishedDistribution() {
  const finishedDistribution = yield select(selectors.getFinishedDistribution);

  if (finishedDistribution === FinishedDistributionPossibilities.Rc) {
    yield call(cleanResaleCooperative);
    return;
  }

  if (finishedDistribution === FinishedDistributionPossibilities.Ta) {
    yield call(cleanTeamAwards);
    return;
  }

  yield call(cleanResaleCooperative);
  yield call(cleanTeamAwards);
}

export function* workerSavePartialDistribution() {
  try {
    const scoredParticipants: ScoredParticipant[] = yield select(
      getScoredParticipants,
    );

    const { teamAwards }: PointsToDistribute = yield select(
      selectors.getPointsToDistribute,
    );

    yield call<any>(savePartialDistributionService, teamAwards?.pointId || 0, {
      settings: JSON.stringify(scoredParticipants),
    });

    yield put(actions.savePartialDistributionSuccess());
  } catch (error) {
    yield call(handlerErrors, error, actions.savePartialDistributionFailure);
  }
}

export function* workerSetDistributionWithSavedSettings() {
  const points: PointsToDistribute = yield select(
    selectors.getPointsToDistribute,
  );
  const hasScoreParticipantsAdded = yield select(getHasScoreParticipantsAdded);

  if (!hasScoreParticipantsAdded) {
    const savedSettings = yield select(selectors.getSavedSetting);
    yield put(actions.setTotalPointsTeamAwards(points.general || 0));
    yield put(setWaitingScoredParticipants(savedSettings));
    yield put(assignPoints());
    yield put(actions.setIsReadyToDistribute(true));
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
    takeEvery(
      DISTRIBUTE_POINTS_ACTION,
      workerVerifyDistributePointsPossibility,
    ),
    takeEvery(DISTRIBUTE_POINTS_FINALLY_ACTION, workerDistributePoints),
    takeEvery(SET_FINISHED_DISTRIBUTION, workerFinishedDistribution),
    takeEvery(SAVE_PARTIAL_DISTRIBUTION_ACTION, workerSavePartialDistribution),
    takeEvery(
      SET_DISTRIBUTION_WITH_SAVED_SETTINGS,
      workerSetDistributionWithSavedSettings,
    ),
  ]);
}
