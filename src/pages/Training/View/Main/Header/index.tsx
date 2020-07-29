import React from 'react';
import { useTraining } from '../../Context';

import { Container } from './styles';

const Header: React.FC = () => {
  const { training, approved } = useTraining();

  return (
    <Container>
      <div>
        <span>{training?.category.join(', ')} </span>
        <h3>{training?.title}</h3>
        <div>
          <span>{`De ${training?.startDate} até ${training?.endDate}`} </span>
        </div>
      </div>
      <span>
        {approved ||
        (training?.maxTries !== 0 &&
          (training?.maxTries || 0) <= (training?.totalAttempts || 0))
          ? 'Finalizado'
          : 'Iniciado'}
      </span>
    </Container>
  );
};

export default Header;
