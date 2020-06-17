import React from 'react';
import { useSpring } from 'react-spring';

import logoImg from 'assets/images/logo.svg';

import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import { Container, Content, contentAnimation, Contact } from './styles';

const SignIn: React.FC = () => {
  const props = useSpring(contentAnimation);

  return (
    <Container>
      <img src={logoImg} alt="Logo GoBarber" />
      <Content style={props}>
        <FormSignIn />
        <FormSignUp />
      </Content>
      <Contact initialPosition="right-bottom" />
    </Container>
  );
};

export default SignIn;
