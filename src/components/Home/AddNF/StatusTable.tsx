import React from 'react';

import { ReactSVG } from 'react-svg';
import { StyledStatusTable } from './styles';

const StatusTable: React.FC = () => {
  return (
    <>
      <StyledStatusTable>
        <ul>
          <li>
            <span className="StatusTable__label">Em análise</span>
            <span className="StatusTable__dots" />
            <span className="StatusTable__value">1</span>
          </li>
          <li>
            <span className="StatusTable__label">Liberadas</span>
            <span className="StatusTable__dots" />
            <span className="StatusTable__value">1</span>
          </li>
          <li>
            <span className="StatusTable__label">Descredenciadas</span>
            <span className="StatusTable__dots" />
            <span className="StatusTable__value">1</span>
          </li>
        </ul>
      </StyledStatusTable>
    </>
  );
};

export default StatusTable;
