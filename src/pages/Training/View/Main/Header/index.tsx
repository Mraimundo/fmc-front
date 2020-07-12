import React from 'react';
import { useTraining } from '../../Context';

import { Container } from './styles';

const Header: React.FC = () => {
  const { training } = useTraining();

  return (
    <Container>
      <div>
        <span>{training?.category.join(', ')} </span>
        <h3>{training?.title}</h3>
        <div>
          <span>{`De ${training?.startDate} até ${training?.endDate}`} </span>
        </div>
      </div>
      <span>{training?.status}</span>
    </Container>
  );
};

export default Header;
