import React from 'react';

import { Prize } from 'services/spinningWheel/interfaces';
import { Container, PieSlice } from './styles';

interface Props {
  values: Prize[];
  winner: { prizeId: number } | null;
}

const Pie: React.FC<Props> = ({ values, winner }) => {
  const size = 360 / values.length;

  return (
    <Container>
      {values.map((item, index) => (
        <PieSlice
          key={item.id}
          index={index}
          rotate={size * index}
          size={size}
          length={values.length}
          value={item.value}
          winner={winner !== null ? winner.prizeId === item.id : undefined}
        >
          <div />
        </PieSlice>
      ))}
    </Container>
  );
};

export default Pie;
