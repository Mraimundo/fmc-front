import React from 'react';
import { useSpring } from 'react-spring';

import logoImg from 'assets/images/logo.svg';

import Modal from 'components/Auth/ForgotPassword/RequestResetPasswordModal';
import ConfirmModal from 'components/Auth/ForgotPassword/SendResetPasswordConfirmationModal';

import { useLocation } from 'react-router-dom';

import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';
import { Container, Content, contentAnimation, Contact } from './styles';

const SignIn: React.FC = () => {
  const props = useSpring(contentAnimation);
  const location = useLocation();

  const [token, setToken] = React.useState('');
  const [
    modalChangePasswordOpened,
    setModalChangePasswordOpened,
  ] = React.useState(false);
  React.useEffect(() => {
    const { pathname } = location;
    const paramToken = new URLSearchParams(location.search).get('token');
    if (pathname === '/recover' && paramToken) {
      setToken(paramToken);
      setModalChangePasswordOpened(true);
    }
  }, [location]);

  const [modalSendMailOpened, setModalSendMailOpened] = React.useState(false);
  const [modalConfirmationOpened, setModalConfirmationOpened] = React.useState(
    false,
  );

  return (
    <>
      <Container>
        <img src={logoImg} alt="Logo GoBarber" />
        <Content style={props}>
          <FormSignIn />
          <FormSignUp />
        </Content>
        <Contact initialPosition="right-bottom" />
      </Container>
      <Modal
        isOpen={modalSendMailOpened}
        onRequestClose={() => {
          setModalSendMailOpened(false);
          setModalConfirmationOpened(true);
        }}
      />

      <ConfirmModal
        isOpen={modalConfirmationOpened}
        onRequestClose={() => {
          setModalConfirmationOpened(false);
        }}
      />
    </>
  );
};

export default SignIn;
