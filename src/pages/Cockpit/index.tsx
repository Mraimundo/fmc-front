import React, { useCallback } from 'react';

import Roleta from 'components/SpinningWheel/Component';
import GeneralView from './GeneralView';
import ChannelView from './ChannelView';

import { Container, GeneralContent, Content, Separator } from './styles';

const mockValues = [
  '100 pontos',
  'Tente novamente',
  '250 pontos',
  'Tenho outra vez',
  '300 pontos',
  'Surpresa',
];

const Cockpit: React.FC = () => {
  const spin = useCallback(async (): Promise<string> => {
    return '100 pontos';
  }, []);
  return <Roleta values={mockValues} spin={spin} />;
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
