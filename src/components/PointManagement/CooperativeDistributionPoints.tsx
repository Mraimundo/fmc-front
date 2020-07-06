import React, { useMemo } from 'react';
import { Container } from 'react-grid-system';

type Props = {
  totalPointsToDistrute?: number;
  teamPoints?: number;
  cooperativePoints?: number;
  handleDistributePoints(): void;
};

const CooperativeDistributionPoints: React.FC<Props> = ({
  totalPointsToDistrute = 0,
  teamPoints = 0,
  cooperativePoints = 0,
  handleDistributePoints,
}) => {
  const enableButton = useMemo(
    () => teamPoints + cooperativePoints === totalPointsToDistrute,
    [teamPoints, cooperativePoints, totalPointsToDistrute],
  );

  return (
    <Container>
      <div>
        <h1>
          {`TOTAL PONTOS COOPERATIVA PARA DISTRIBUIR ${totalPointsToDistrute}`}
        </h1>
        <p>
          Defina como deseja utilizar seus e pontos. Eles podem ser distribuídos
          entre equipe e/ou cooperativa.
        </p>
      </div>
      <div>
        <button
          type="button"
          disabled={!enableButton}
          onClick={handleDistributePoints}
          data-testid="button-distribute-points-cooperative"
        >
          DISTRIBUIR PONTOS
        </button>
      </div>
    </Container>
  );
};

export default CooperativeDistributionPoints;
