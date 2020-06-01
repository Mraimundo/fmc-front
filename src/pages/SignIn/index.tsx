import React from 'react';

import logoImg from 'assets/images/logo.svg';

import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Logo GoBarber" />
      <Content>
        <FormSignIn />
        <FormSignUp />
      </Content>
    </Container>
  );
};

export default SignIn;
