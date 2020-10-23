import React from 'react';
import { Nf as INf } from 'services/nf/interfaces';

import { Container } from './styles';

const StatusTable = props => {
  return (
    <Container>
      <ul>
        <li>
          <p>Em análise</p>
          <span />
          <p>{props.nfListLength}</p>
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
