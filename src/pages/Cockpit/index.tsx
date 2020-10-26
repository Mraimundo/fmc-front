import React, { useEffect, useState } from 'react';

import Modal from 'components/SpinningWheel/Modal';
import { getAvailableSpins, spin } from 'services/spinningWheel';
import { Spin } from 'services/spinningWheel/interfaces';
import GeneralView from './GeneralView';
import ChannelView from './ChannelView';

import { Container, GeneralContent, Content, Separator } from './styles';

const Cockpit: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [spinData, setSpinData] = useState<Spin | null>(null);

  useEffect(() => {
    getAvailableSpins(12).then(data => setSpinData(data || null));
  }, []);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Test
      </button>
      {spinData && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          spinData={spinData}
          spin={spin}
        />
      )}
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
