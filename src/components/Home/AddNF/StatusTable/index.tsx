import React from 'react';

import { Link } from 'react-router-dom';
import routeMap from 'routes/route-map';
import { Container } from './styles';

interface Props {
  nfList: any;
  display: string;
}

const StatusTable: React.FC<Props> = Props => {
  console.log(Props.nfList)
  function countNFByStatus(nf: any[], status: number) {
    let count = 0;
    nf.forEach(safra => {
      safra?.item?.forEach((nota: { status_id: number }) => {
        if (nota.status_id === status) {
          count += 1;
        }
      });
    });
    return count;
  }
  return (
    <Container display={Props.display}>
      <Link to={routeMap.receipts}>
        <ul>
          <li>
            <p>Em análise</p>
            <span />
            <p>
              {countNFByStatus(Props.nfList, 0) +
                countNFByStatus(Props.nfList, 3)}
            </p>
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
      </Link>
    </Container>
  );
};

export default StatusTable;
