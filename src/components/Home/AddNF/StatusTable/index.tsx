import React from 'react';

import { Container } from './styles'; 

interface Props {
  nfList: any;
}

const StatusTable: React.FC<Props> = Props => {
  function countNFByStatus(nf: any[], status: number) {
    let count = 0;
    nf.forEach(item => {
      if (item.status_id === status) {
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
            <p>{countNFByStatus(Props.nfList, 0)} </p>
          </li>
          <li>
            <p>Liberadas</p>
            <span />
            <p>{countNFByStatus(Props.nfList, 1)} </p>
          </li>
          <li>
            <p>Descredenciadas</p>
            <span />
            <p>{countNFByStatus(Props.nfList, 2)} </p>
          </li>
        </ul>
   
    </Container>
  );
};

export default StatusTable;
