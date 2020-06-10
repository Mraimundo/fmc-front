import React from 'react';
import { useSpring } from 'react-spring';

import logoImg from 'assets/images/logo.png';
import Form from './Form';

import { Container, Content, contentAnimation } from './styles';

const FirstAccess: React.FC = () => {
  const props = useSpring(contentAnimation);

  return (
    <Container>
      <img src={logoImg} alt="Logo" />
      <Content style={props}>
        <Form />
      </Content>
    </Container>
  );
};

export default FirstAccess;
