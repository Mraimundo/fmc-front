import React, { useState } from 'react';
import { useSpring } from 'react-spring';

import Modal from 'components/shared/Modal';
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import Logo from './Logo';

import { Container, Content, Title, contentAnimation } from './styles';

const SignIn: React.FC = () => {
  const props = useSpring(contentAnimation);
  const [opened, setOpened] = useState(false);

  return (
    <Container>
      <Logo />
      <Content style={props}>
        <Title>Já sou cadastrado</Title>

        <FormSignIn />
        <Title>Primeiro acesso?</Title>
        <FormSignUp />
      </Content>
      <button type="button" onClick={() => setOpened(true)}>
        Click
      </button>
      <Modal isOpen={opened} onRequestClose={() => setOpened(false)}>
        <h1>Ola</h1>
      </Modal>
    </Container>
  );
};

export default SignIn;
