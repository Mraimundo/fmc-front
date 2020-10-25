import React, { useEffect, useState } from 'react';

import Modal from 'components/SpinningWheel/Modal';
import { getAvailablePrizes, spin } from 'services/spinningWheel';
import { Prize } from 'services/spinningWheel/interfaces';
import GeneralView from './GeneralView';
import ChannelView from './ChannelView';

import { Container, GeneralContent, Content, Separator } from './styles';

const Cockpit: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prizes, setPrizes] = useState<Prize[]>([]);

  useEffect(() => {
    getAvailablePrizes().then(data => setPrizes(data));
  }, []);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Test
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        values={prizes}
        spin={spin}
      />
    </>
  );
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
