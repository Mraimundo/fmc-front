import React from 'react';

import { Container } from './styles';

interface Props {
  ranking: {
    name: string;
    position: number;
  };
}

const Ranking: React.FC<Props> = ({ ranking }) => {
  return (
    <Container>
      <span>{ranking.name}</span>
      <p>{ranking.position}º lugar</p>
    </Container>
  );
};

export default Ranking;
