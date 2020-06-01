import React from 'react';

import logoImg from 'assets/images/logo.svg';

import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import { Container, Content, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Logo GoBarber" />
      <Content>
        <Title>Já sou cadastrado</Title>
        <FormSignIn />
        <Title>Primeiro acesso?</Title>
        <FormSignUp />
      </Content>
    </Container>
  );
};

export default SignIn;
