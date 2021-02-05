import React from 'react';
import { formatDate } from 'util/datetime';

import ChannelBox from '../ChannelBox';

import { Container } from './styles';

type Tab = 'tab1' | 'tab2';

interface Props {
  simulatedDate: Date;
  partialDate: Date;
  channelName: string;
  channelCategory?: string;
}

const Header: React.FC<Props> = props => {
  const { simulatedDate, partialDate, channelName, channelCategory = "" } = props;

  return (
    <Container id="_points-simulator-header">
      <h3>Simulador de Pontos do Programa de Relacionamento JUNTOS FMC</h3>
      <div>
        <h3>Resultado da simulação</h3>
        <span>
          (em {formatDate(simulatedDate)} com parciais de{' '}
          {formatDate(partialDate)})
        </span>
        <ChannelBox channelName={channelName} text="Safra 20/21" category={channelCategory}/>
      </div>
    </Container>
  );
};

export default Header;
