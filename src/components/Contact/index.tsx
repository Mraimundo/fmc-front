import React, { useState } from 'react';

import Draggable from 'react-draggable';
import { Container, Content } from './styles';
import Modal from './Disconnected/Modal';

type Position = 'left-bottom' | 'right-bottom' | 'left-top' | 'right-top';

interface ContactProps {
  initialPosition: Position;
}

const style = {
  'left-bottom': { left: 50, bottom: 50 },
  'right-bottom': { right: 50, bottom: 50 },
  'left-top': { left: 50, top: 50 },
  'right-top': { right: 50, top: 50 },
};

const Contact: React.FC<ContactProps> = ({ initialPosition }) => {
  const defaultPosition = style[initialPosition];
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <Container style={defaultPosition}>
        <Draggable>
          <div>
            <Content onClick={() => setModalOpened(true)}>
              <span>?</span>
            </Content>
          </div>
        </Draggable>
      </Container>
      <Modal
        isOpen={modalOpened}
        onRequestClose={() => setModalOpened(false)}
      />
    </>
  );
};

export default Contact;
