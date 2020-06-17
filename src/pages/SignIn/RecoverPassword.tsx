import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import RequestResetModal from 'components/Auth/ForgotPassword/RequestResetPasswordModal';
import ConfirmRequestResesetModal from 'components/Auth/ForgotPassword/SendResetPasswordConfirmationModal';
import ChangePasswordModal from 'components/Auth/ForgotPassword/ChangePasswordByTokenModal';
import ConfirmChangePasswordModal from 'components/Auth/ForgotPassword/ChangePasswordConfirmationModal';

import { ForgotPasswordButton } from './styles';

const RecoverPassword: React.FC = () => {
  const location = useLocation();

  const [requestResetModalOpened, setRequestResetModalOpened] = React.useState(
    true,
  );
  const [
    confirmRequestResesetModalOpened,
    setConfirmRequestResesetModalOpened,
  ] = React.useState(false);
  const [
    changePasswordModalOpened,
    setChangePasswordModalOpened,
  ] = React.useState(false);
  const [
    confirmChangePasswordModalOpened,
    setConfirmChangePasswordModalOpened,
  ] = React.useState(false);
  const [token, setToken] = React.useState('');

  useEffect(() => {
    const { pathname } = location;
    const paramToken = new URLSearchParams(location.search).get('token');
    if (pathname === '/recover' && paramToken) {
      setToken(paramToken);
      setChangePasswordModalOpened(true);
    }
  }, [location]);

  return (
    <>
      <ForgotPasswordButton
        type="button"
        onClick={() => setRequestResetModalOpened(true)}
      >
        Esqueci minha senha
      </ForgotPasswordButton>
      <RequestResetModal
        isOpen={requestResetModalOpened}
        onRequestClose={() => {
          setRequestResetModalOpened(false);
        }}
        onSuccessSendEmail={() => {
          setConfirmRequestResesetModalOpened(true);
        }}
      />

      <ConfirmRequestResesetModal
        isOpen={confirmRequestResesetModalOpened}
        onRequestClose={() => {
          setConfirmRequestResesetModalOpened(false);
        }}
      />

      {!!token && (
        <>
          <ChangePasswordModal
            isOpen={changePasswordModalOpened}
            onRequestClose={() => {
              setChangePasswordModalOpened(false);
            }}
            onSuccessSendEmail={() => {
              setConfirmChangePasswordModalOpened(true);
            }}
            token={token}
          />

          <ConfirmChangePasswordModal
            isOpen={confirmChangePasswordModalOpened}
            onRequestClose={() => {
              setConfirmChangePasswordModalOpened(false);
            }}
          />
        </>
      )}
    </>
  );
};

export default RecoverPassword;
