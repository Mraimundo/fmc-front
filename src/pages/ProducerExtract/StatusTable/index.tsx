import React from 'react';
import { Container } from './styles';


interface NfProps {
  nfList: any;
  display: string;
}

const StatusTable: React.FC<NfProps> = NfProps => {
  function countNFByStatus(nf: any[], status: number) {
    let count = 0;
    nf.forEach(safra => {
      safra.item.forEach((nota: { status_id: number }) => {
        if (nota.status_id === status) {
          count += 1;
        }
      });
    });
    return count;
  }
  return (
    <Container display={NfProps.display}>
      <ul>
        <li>
          <p>Liberadas</p>
          <span />
          <p>{countNFByStatus(NfProps.nfList, 0)} </p>
        </li>
        <li>
          <p>Em análise</p>
          <span />
          <p>{countNFByStatus(NfProps.nfList, 1)} </p>
        </li>
        <li>
          <p>Descredenciadas</p>
          <span />
          <p>{countNFByStatus(NfProps.nfList, 2)} </p>
        </li>
      </ul>
    </Container>
  );
};

export default StatusTable;
