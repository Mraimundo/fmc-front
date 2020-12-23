import React from 'react';

import { Container } from './styles';
interface Props {
  nfListLength: number;
}

const StatusTable: React.FC<Props> = Props => {
  return (
    <Container>
      <ul>
        <li>
          <p>Em análise</p>
          <span />
          <p>{Props.nfListLength}</p>
        </li>
        <li>
          <p>Liberadas</p>
          <span />
          <p>0</p>
        </li>
        <li>
          <p>Descredenciadas</p>
          <span />
          <p>0</p>
        </li>
      </ul>
    </Container>
  );
};

export default StatusTable;
