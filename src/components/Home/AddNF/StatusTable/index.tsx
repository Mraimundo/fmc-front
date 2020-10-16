import React from 'react';

import { Container } from './styles';

const StatusTable: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <p>Em análise</p>
          <span />
          <p>1</p>
        </li>
        <li>
          <p>Liberadas</p>
          <span />
          <p>1</p>
        </li>
        <li>
          <p>Descredenciadas</p>
          <span />
          <p>1</p>
        </li>
      </ul>
    </Container>
  );
};

export default StatusTable;
