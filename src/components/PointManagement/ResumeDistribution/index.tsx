import React, { useCallback, useMemo } from 'react';
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
} from 'state/modules/point-management/common/actions';
import {
  getFinishedDistribution,
  getPointsToDistribute as getPointsToDistributeCommon,
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
  ];

  const dispatch = useDispatch();

  const partialDistribution = pointsToDistributeCommon.allowPartialDistribution
    ? FinishedDistributionPossibilities.Rc
    : FinishedDistributionPossibilities.All;

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

  const isDisabledDistributeEqually = useMemo(() => {
    if (distributeEqually) return false;

    return !pointsToDistribute || !selectedParticipantsWithoutScore;
  }, [distributeEqually, pointsToDistribute, selectedParticipantsWithoutScore]);

  const { Ta, All } = FinishedDistributionPossibilities;
  const isFinished = finishedDistribution === (Ta || All);

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
        Saldo disponível: {formatPoints(availableScore)} pontos
      </AvailableScoreText>
      <Checkbox
        checked={distributeEqually}
        disabled={isDisabledDistributeEqually}
        onChange={handleChangeDistributeEqually}
        label="Distribuir igualmente"
      />
      {!!totalForEachParticipantDistributedEqually && (
        <Text>
          Cada participante receberá{' '}
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
      <Title center>Resumo da Distribuição</Title>
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
            onClick={() => {
              dispatch(savePartialDistribution());
            }}
            disabled={!scoredParticipants}
          >
            SALVAR DISTRIBUIÇÃO
          </Button>
          <Button
            buttonRole="tertiary"
            type="button"
            onClick={handleDistributePoints}
            disabled={!isEnabledToDistributePoints}
          >
            DISTRIBUIR PREMIAÇÃO
          </Button>
        </>
      )}
    </div>
  );
};

export default ResumeDistribution;
