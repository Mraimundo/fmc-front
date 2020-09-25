import React from 'react';

import { Link } from 'react-router-dom';
import GeneralView from './GeneralView';
import ChannelView from './ChannelView';

import { Container, Test, Content, Separator } from './styles';

const Cockpit: React.FC = () => {
  return (
    <Container>
      <Test>
        <Link to="/power-bi">Power Bi</Link>
        <Content>
          <h3>Cockpit</h3>
          <GeneralView />
        </Content>
      </Test>
      <Content>
        <Separator />
        <ChannelView />
      </Content>
    </Container>
  );
};

export default Cockpit;
