import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import history from 'services/history';
import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';

const Sso: React.FC = () => {
  const { search } = useLocation();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  useEffect(() => {
    const token = new URLSearchParams(search).get('token');
    const encodedMessage = new URLSearchParams(search).get('m');

    if (encodedMessage) {
      try {
        const decodedMessage = decodeURIComponent(atob(encodedMessage));
        addToast({
          title: decodedMessage,
          type: 'error',
        });
      } catch {
        history.push('/');
        return;
      }
    }

    if (!token) {
      history.push('/');
      return;
    }

    signIn({ token, isSSOToken: true });
    history.push('/');
  }, [search, addToast, signIn]);

  return <h1>aguarde...</h1>;
};

export default Sso;
