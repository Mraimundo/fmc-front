import React from 'react';

import GeneralView from './GeneralView';
import ChannelView from './ChannelView';

import { Container, GeneralContent, Content, Separator } from './styles';

const Cockpit: React.FC = () => {
  return (
    <Container>
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
