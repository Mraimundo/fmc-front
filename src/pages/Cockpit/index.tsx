import React from 'react';

import GeneralView from './GeneralView';
import ChannelView from './ChannelView';

import { Container, Content, Separator } from './styles';

const Cockpit: React.FC = () => {
  return (
    <Container>
      <Content>
        <h3>Cockpit</h3>
        <GeneralView />
        <Separator />
        <ChannelView />
      </Content>
    </Container>
  );
};

export default Cockpit;
