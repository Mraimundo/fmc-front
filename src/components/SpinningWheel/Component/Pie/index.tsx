import React from 'react';

import { Container, PieSlice } from './styles';

const Pie: React.FC = () => {
  const values = ['1', '2', '3', '4', '5', '6'];
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
        >
          <div />
        </PieSlice>
      ))}
    </Container>
  );
};

export default Pie;
