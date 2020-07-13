import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-grid-system';
import { useRifm } from 'rifm';

import { formatPoints, parseNumber, formatCurrency } from 'util/points';
import {
  getTotalPointsToDistribute,
  getTotalPointsTeamAwards,
  getTotalPointsCooperative,
  isEnabledBtnToDistribute,
} from 'state/modules/point-management/common/selectors';
import {
  fetchTotalPointsToDistribute,
  setTotalPointsTeamAwards,
  setTotalPointsCooperative,
  setIsReadyToDistribute,
} from 'state/modules/point-management/common/actions';

const CooperativeDistributionPoints: React.FC = () => {
  const totalPointsToDistrute = useSelector(getTotalPointsToDistribute);
  const totalPointsTeamAwards = useSelector(getTotalPointsTeamAwards);
  const totalPointsCooperative = useSelector(getTotalPointsCooperative);
  const enabledBtnToDistribute = useSelector(isEnabledBtnToDistribute);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTotalPointsToDistribute());
  }, [dispatch]);

  const teamAwardsRifm = useRifm({
    value: totalPointsTeamAwards,
    onChange: (value: string) =>
      dispatch(setTotalPointsTeamAwards(parseNumber(value))),
    format: formatCurrency,
  });

  const cooperativeResaleRifm = useRifm({
    value: totalPointsCooperative,
    onChange: (value: string) =>
      dispatch(setTotalPointsCooperative(parseNumber(value))),
    format: formatCurrency,
  });

  return (
    <Container>
      <div>
        <h1>
          {`TOTAL PONTOS COOPERATIVA PARA DISTRIBUIR ${formatPoints(
            totalPointsToDistrute,
          )}`}
        </h1>
        <p>
          Defina como deseja utilizar seus e pontos. Eles podem ser distribuídos
          entre equipe e/ou cooperativa.
        </p>
      </div>
      <div>
        <input
          type="tel"
          placeholder="Pontos Equipe"
          value={teamAwardsRifm.value}
          onChange={teamAwardsRifm.onChange}
        />
        <input
          type="text"
          placeholder="Pontos Cooperativa"
          value={cooperativeResaleRifm.value}
          onChange={cooperativeResaleRifm.onChange}
        />
      </div>
      <div>
        <button
          type="button"
          disabled={!enabledBtnToDistribute}
          onClick={() => dispatch(setIsReadyToDistribute(true))}
          data-testid="button-distribute-points-cooperative"
        >
          DISTRIBUIR PONTOS
        </button>
      </div>
    </Container>
  );
};

export default CooperativeDistributionPoints;
