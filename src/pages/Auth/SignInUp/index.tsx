import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import Logo from './Logo';

import Modal from '../../../components/Contact/Disconnected/ModalPreCadastro';

import { Container, Content, Title, contentAnimation, Contact } from './styles';

const SignIn: React.FC = () => {
  const props = useSpring(contentAnimation);
  const [modalOpened, setModalOpened] = useState(true);

  return (
    <Container>
      <Logo />

      <Content style={props}>
        <Title>Já sou cadastrado</Title>
        <FormSignIn />
        <Title>Primeiro acesso?</Title>
        <FormSignUp />
      </Content>
      <Contact initialPosition="right-bottom" />
      <Modal
        isOpen={modalOpened}
        onRequestClose={() => setModalOpened(false)}
      />
    </Container>
  );
};

export default SignIn;
