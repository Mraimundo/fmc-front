import React from 'react';

import Simulador from 'pages/PointsSimulator/Result';
import { Link } from 'react-router-dom';
import GeneralView from './GeneralView';
import ChannelView from './ChannelView';

import { Container, GeneralContent, Content, Separator } from './styles';

const Cockpit: React.FC = () => {
  return (
    <Container>
      <Link to="/visao-do-participante">Acessar</Link>
      <GeneralContent>
        <Content>
          <h3>Cockpit</h3>
          <GeneralView />
        </Content>
      </GeneralContent>
      <Content>
        <Separator />
        <ChannelView />
      </Content>
    </Container>
  );
};

export default Cockpit;
