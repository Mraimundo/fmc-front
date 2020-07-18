import React, { useCallback } from 'react';
import { useRifm } from 'rifm';
import { useDispatch, useSelector } from 'react-redux';

import { formatPoints, parseNumber, formatCurrency } from 'util/points';
import Button from 'components/shared/Button';
import { Title, Checkbox } from 'components/PointManagement';
import {
  setPointsToDistribute,
  toggleDistributeEqually,
  assignPoints,
} from 'state/modules/point-management/team-awards/actions';
import {
  getPointsToDistribute,
  getBalanceAvailable,
  getDistributeEqually,
  getScoredParticipantsResume,
  getTotalForEachParticipantDistributedEqually,
} from 'state/modules/point-management/team-awards/selectors';
import { InputPointsToDistribute } from './styles';

const ResumeDistribution: React.FC = () => {
  const dispatch = useDispatch();
  const pointsToDistribute = useSelector(getPointsToDistribute);
  const availablePoints = useSelector(getBalanceAvailable);
  const distributeEqually = useSelector(getDistributeEqually);
  const scoredParticipants = useSelector(getScoredParticipantsResume);
  const totalForEachParticipantDistributedEqually = useSelector(
    getTotalForEachParticipantDistributedEqually,
  );

  const pointsToDistributeRifm = useRifm({
    value: pointsToDistribute,
    onChange: (value: string) =>
      dispatch(setPointsToDistribute(parseNumber(value))),
    format: formatCurrency,
  });

  const handleChangeDistributeEqually = useCallback(() => {
    dispatch(toggleDistributeEqually());
  }, [dispatch]);

  return (
    <div>
      <Title>2. Digite a quantidade de pontos que deseja distribuir</Title>
      <InputPointsToDistribute
        type="tel"
        placeholder="DIGITE AQUI O VALOR"
        value={pointsToDistributeRifm.value}
        onChange={pointsToDistributeRifm.onChange}
      />
      <h3>Saldo disponível: {availablePoints} pontos</h3>
      <Checkbox
        checked={distributeEqually}
        disabled={!pointsToDistributeRifm.value}
        onChange={handleChangeDistributeEqually}
        label="Distribuir igualmente"
      />
      {!!totalForEachParticipantDistributedEqually && (
        <p>
          Cada participante receberá{' '}
          {formatPoints(totalForEachParticipantDistributedEqually)} pontos
        </p>
      )}
      <Button
        buttonRole="tertiary"
        type="button"
        onClick={() => dispatch(assignPoints())}
      >
        ATRIBUIR PONTOS
      </Button>
      <h2>Resumo da distribuição</h2>
      <ul>
        {!!scoredParticipants &&
          Object.keys(scoredParticipants).map(role => (
            <li>
              <h4>{role}</h4>
              <p>
                {`${
                  scoredParticipants[role].count
                } pessoas contempladas - ${formatPoints(
                  scoredParticipants[role].totalPoints,
                )}`}
              </p>
            </li>
          ))}
      </ul>
      <Button buttonRole="tertiary" type="button">
        DISTRIBUIR PREMIAÇÃO
      </Button>
    </div>
  );
};

export default ResumeDistribution;
