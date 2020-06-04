import React, { useState } from 'react';

import Draggable from 'react-draggable';
import { Container, Content } from './styles';

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

  return (
    <Container style={defaultPosition}>
      <Draggable>
        <Content>
          <span>?</span>
        </Content>
      </Draggable>
    </Container>
  );
};

export default Contact;
