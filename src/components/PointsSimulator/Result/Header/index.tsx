import React from 'react';
import { formatDate } from 'util/datetime';

import MiniBox from '../MiniBox';

import { Container } from './styles';

type Tab = 'tab1' | 'tab2';

interface Props {
  simulatedDate: Date;
  partialDate: Date;
  channelName: string;
}

const Header: React.FC<Props> = props => {
  const { simulatedDate, partialDate, channelName } = props;

  return (
    <Container>
      <h3>Simulador</h3>
      <div>
        <h3>Resultado da simulação</h3>
        <span>
          (simulado em {formatDate(simulatedDate)} com parciais de{' '}
          {formatDate(partialDate)})
        </span>
        <MiniBox title={channelName} text="Safra 20/21" />
      </div>
    </Container>
  );
};

export default Header;
