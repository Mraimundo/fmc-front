import React from 'react';

import { Container } from './styles';
interface Props {
  nfList: any;
}

const StatusTable: React.FC<Props> = Props => {
  function countNFByStatus(nf: any[], status: string) {
    let count = 0;
    nf.forEach(item => {
      if (item.status === status) {
        count += 1;
      }
    });
    return count;
  }
  return (
    <Container>
      <ul>
        <li>
          <p>Em análise</p>
          <span />
          <p>{countNFByStatus(Props.nfList, 'Em análise')} </p>
        </li>
        <li>
          <p>Liberadas</p>
          <span />
          <p>{countNFByStatus(Props.nfList, 'Liberadas')} </p>
        </li>
        <li>
          <p>Descredenciadas</p>
          <span />
          <p>{countNFByStatus(Props.nfList, 'Descredenciadas')} </p>
        </li>
      </ul>
    </Container>
  );
};

export default StatusTable;
