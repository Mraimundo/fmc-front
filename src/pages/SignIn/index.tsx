import React from 'react';

import logoImg from 'assets/images/logo.svg';

import FormSignIn from './FormSignIn';
import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo GoBarber" />
        <FormSignIn />
      </Content>
    </Container>
  );
};

export default SignIn;
