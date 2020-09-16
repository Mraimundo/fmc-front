import React from 'react';
import { Statistics as IStatistics } from 'services/cockpit/interfaces/channel';

import { Container, Card, CardBody } from './styles';

interface Props {
  statistics: IStatistics;
}

const Statistics: React.FC<Props> = ({
  statistics: { establishment, participants, fmcSharedActions },
}) => {
  return (
    <Container>
      <Card>
        <h3>{establishment.name}</h3>
        <CardBody>
          <span>Categoria: {establishment.category}</span>
          <span>Tipo: {establishment.type}</span>
          <span>Status: {establishment.status}</span>
          <span>Safra: {establishment.campaign}</span>
        </CardBody>
      </Card>
      <Card>
        <h3>Participantes</h3>
        <CardBody>
          <p>
            Ativos: <strong>{participants.formatedActive}</strong>
          </p>
          <p>
            Pré-cadastro: <strong>{participants.formatedPrecharge}</strong>
          </p>
        </CardBody>
      </Card>
      <Card>
        <h3>Ações Compartilhadas FMC</h3>
        <CardBody>
          <p>Saldo para o Canal</p>
          <p>
            <strong>{fmcSharedActions.formattedBalance}</strong>
          </p>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Statistics;
