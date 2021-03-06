import React, { useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formatPoints } from 'util/points';
import Button from 'components/shared/Button';
import { Title, Checkbox } from 'components/PointManagement';
import { FinishedDistributionPossibilities } from 'state/modules/point-management/common/constants';
import {
  setPointsToDistribute,
  toggleDistributeEqually,
  assignPoints,
  removeAllScores,
} from 'state/modules/point-management/team-awards/actions';
import {
  distributePoints,
  savePartialDistribution,
  savePartialDistributionFinish,
} from 'state/modules/point-management/common/actions';
import {
  getFinishedDistribution,
  getPointsToDistribute as getPointsToDistributeCommon,
  getPartialDistribution as getPartialDistributionStatus,
  getIsPartialDistributionFinished,
  getDistributePoints,
} from 'state/modules/point-management/common/selectors';
import {
  getPointsToDistribute,
  getAvailableScore,
  getDistributeEqually,
  getScoredParticipantsResume,
  getTotalForEachParticipantDistributedEqually,
  getSelectedParticipantsWithoutScore,
  getIsEnabledToAssignPoints,
  getIsEnabledToDistributePoints,
} from 'state/modules/point-management/team-awards/selectors';
import { getIsEnabledToRescue } from 'state/modules/point-management/resale-cooperative/selectors';
import { useToast } from 'context/ToastContext';
// import { Tooltip } from 'components/shared';
import Tooltip from '@material-ui/core/Tooltip';
import ResumeWidget from './ResumeWidget';
import PointsToDistribute from './PointsToDistribute';
import RemoveAllScores from '../RemoveAllScores';
import { Text, AvailableScoreText } from './styles';

const ResumeDistribution: React.FC = () => {
  const [
    pointsToDistribute,
    availableScore,
    distributeEqually,
    scoredParticipants,
    totalForEachParticipantDistributedEqually,
    selectedParticipantsWithoutScore,
    isEnabledToAssignPoints,
    isEnabledToDistributePoints,
    finishedDistribution,
    pointsToDistributeCommon,
    partialDistributionStatus,
    isPartialDistributionFinished,
    isEnableToRescue,
    distributePointsStatus,
  ] = [
    useSelector(getPointsToDistribute),
    useSelector(getAvailableScore),
    useSelector(getDistributeEqually),
    useSelector(getScoredParticipantsResume),
    useSelector(getTotalForEachParticipantDistributedEqually),
    useSelector(getSelectedParticipantsWithoutScore),
    useSelector(getIsEnabledToAssignPoints),
    useSelector(getIsEnabledToDistributePoints),
    useSelector(getFinishedDistribution),
    useSelector(getPointsToDistributeCommon),
    useSelector(getPartialDistributionStatus),
    useSelector(getIsPartialDistributionFinished),
    useSelector(getIsEnabledToRescue),
    useSelector(getDistributePoints),
  ];

  const dispatch = useDispatch();

  const { addToast } = useToast();

  const partialDistribution = pointsToDistributeCommon.allowPartialDistribution
    ? FinishedDistributionPossibilities.Rc
    : FinishedDistributionPossibilities.All;

  const {
    isFetching: isFetchingPartial,
    error: errorPartial,
  } = partialDistributionStatus;

  const { isFetching: isFetchingDistributePoints } = distributePointsStatus;

  const handleChangePointsToDistribute = useCallback(
    (points: number) => {
      dispatch(setPointsToDistribute(points));
    },
    [dispatch],
  );

  const handleChangeDistributeEqually = useCallback(() => {
    dispatch(toggleDistributeEqually());
  }, [dispatch]);

  const handleRemoveAllScores = useCallback(() => {
    dispatch(removeAllScores());
  }, [dispatch]);

  const handleDistributePoints = useCallback(() => {
    dispatch(distributePoints(partialDistribution));
  }, [dispatch, partialDistribution]);

  const handleSaveDistribution = useCallback(() => {
    dispatch(savePartialDistribution());
  }, [dispatch]);

  const isDisabledDistributeEqually = useMemo(() => {
    if (distributeEqually) return false;

    return !pointsToDistribute || !selectedParticipantsWithoutScore;
  }, [distributeEqually, pointsToDistribute, selectedParticipantsWithoutScore]);

  const { Ta, All } = FinishedDistributionPossibilities;
  const isFinished = finishedDistribution === (Ta || All);

  useEffect(() => {
    if (errorPartial) {
      addToast({ title: errorPartial, type: 'info' });
    }
  }, [addToast, errorPartial]);

  useEffect(() => {
    if (isPartialDistributionFinished) {
      addToast({ title: 'Distribui????o salva com sucesso!', type: 'info' });
      dispatch(savePartialDistributionFinish());
    }
  }, [addToast, dispatch, isPartialDistributionFinished]);

  return (
    <div>
      <Title center>
        2. Digite a quantidade de pontos que deseja distribuir
      </Title>
      <PointsToDistribute
        pointsToDistribute={pointsToDistribute}
        onChange={handleChangePointsToDistribute}
        maxLength={availableScore}
      />
      <AvailableScoreText>
        Saldo dispon??vel: {formatPoints(availableScore)} pontos
      </AvailableScoreText>
      <Checkbox
        checked={distributeEqually}
        disabled={isDisabledDistributeEqually}
        onChange={handleChangeDistributeEqually}
        label="Distribuir igualmente"
      />
      {!!totalForEachParticipantDistributedEqually && (
        <Text>
          Cada participante receber??{' '}
          {formatPoints(totalForEachParticipantDistributedEqually)}
        </Text>
      )}
      <Button
        buttonRole="tertiary"
        type="button"
        onClick={() => dispatch(assignPoints())}
        style={{ marginBottom: '1em' }}
        disabled={!isEnabledToAssignPoints}
      >
        ATRIBUIR PONTOS
      </Button>
      <Title center>Resumo da Distribui????o</Title>
      {!!scoredParticipants && (
        <>
          <ResumeWidget scoredParticipants={scoredParticipants} />
          <RemoveAllScores onClick={handleRemoveAllScores} />
        </>
      )}
      {!isFinished && (
        <>
          <Button
            buttonRole="tertiary"
            type="button"
            onClick={handleSaveDistribution}
            disabled={!scoredParticipants}
            loading={isFetchingPartial}
          >
            SALVAR DISTRIBUI????O
          </Button>
          {!isEnableToRescue && (
            <Tooltip title="Atribua os Pontos de Revenda para finalizar a distribui????o">
              <span>
                <Button
                  buttonRole="tertiary"
                  type="button"
                  onClick={handleDistributePoints}
                  disabled={!isEnabledToDistributePoints || !isEnableToRescue}
                  loading={isFetchingDistributePoints}
                >
                  DISTRIBUIR PREMIA????O
                </Button>
              </span>
            </Tooltip>
          )}

          {isEnableToRescue && (
            <Button
              buttonRole="tertiary"
              type="button"
              onClick={handleDistributePoints}
              disabled={!isEnabledToDistributePoints || !isEnableToRescue}
              loading={isFetchingDistributePoints}
            >
              DISTRIBUIR PREMIA????O
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default ResumeDistribution;
