import React from 'react';
import { useSpring } from 'react-spring';

import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import Logo from './Logo';

import { Container, Content, Title, contentAnimation } from './styles';

const SignIn: React.FC = () => {
  const props = useSpring(contentAnimation);

  return (
    <Container>
      <Logo />
      <Content style={props}>
        <Title>Já sou cadastrado</Title>

        <FormSignIn />
        <Title>Primeiro acesso?</Title>
        <FormSignUp />
      </Content>
    </Container>
  );
};

export default SignIn;
