import React from 'react';

import Header from './Header';
import Body from './Body';
import { Container } from './styles';

const Table: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
};

export default Table;
