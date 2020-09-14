import React, { useCallback } from 'react';

import Filters, { Filters as IFilters } from './Filters';
import Performance from './Performance';
import Points from './Points';

import { Container, CardContainer, Card, CardBody } from './styles';

const ChannelView: React.FC = () => {
  const onFilter = useCallback(async (filters: IFilters): Promise<void> => {
    console.log('filter');
  }, []);

  return (
    <Container>
      <h3>Visão por canal</h3>
      <Filters onFilter={onFilter} />
      <CardContainer>
        <Card>
          <h3>Nome do Canal</h3>
          <CardBody>
            <span>Categoria: Água</span>
            <span>Tipo: Cooperativa</span>
            <span>Status: Ativo</span>
            <span>Safra: 20/21</span>
          </CardBody>
        </Card>
        <Card>
          <h3>Participantes</h3>
          <CardBody>
            <p>
              Ativos: <strong>37</strong>
            </p>
            <p>
              Pré-cadastro: <strong>18</strong>
            </p>
          </CardBody>
        </Card>
        <Card>
          <h3>Ações Compartilhadas FMC</h3>
          <CardBody>
            <p>Saldo para o Canal</p>
            <p>
              <strong>200.000</strong>
            </p>
          </CardBody>
        </Card>
      </CardContainer>
      <Performance />
      <Points />
    </Container>
  );
};

export default ChannelView;
