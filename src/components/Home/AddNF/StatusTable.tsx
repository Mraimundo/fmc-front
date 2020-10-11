import React from 'react';

import { StyledStatusTable } from './styles';

const StatusTable: React.FC = () => {
  return (
    <StyledStatusTable>
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
    </StyledStatusTable>
  );
};

export default StatusTable;
