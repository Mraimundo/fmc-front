import React from 'react';

import { Container, PieSlice } from './styles';

interface Props {
  values: string[];
}

const Pie: React.FC<Props> = ({ values }) => {
  const size = 360 / values.length;

  return (
    <Container>
      {values.map((item, index) => (
        <PieSlice
          key={item}
          index={index}
          rotate={size * index}
          size={size}
          length={values.length}
          value={item}
        >
          <div />
        </PieSlice>
      ))}
    </Container>
  );
};

export default Pie;
