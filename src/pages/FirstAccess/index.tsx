import React from 'react';
import { useSpring } from 'react-spring';

import logoImg from 'assets/images/logo.svg';
import FormFmc from './FormFmc';

import { Container, Content, contentAnimation } from './styles';

const FirstAccess: React.FC = () => {
  const props = useSpring(contentAnimation);

  return (
    <Container>
      <img src={logoImg} alt="Logo" />
      <Content style={props}>
        <FormFmc />
      </Content>
    </Container>
  );
};

export default FirstAccess;
