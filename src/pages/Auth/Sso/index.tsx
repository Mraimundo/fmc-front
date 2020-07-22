import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import history from 'services/history';
import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';

const Sso: React.FC = () => {
  const { search } = useLocation();
  const { setToken } = useAuth();
  const { addToast } = useToast();

  useEffect(() => {
    const token = new URLSearchParams(search).get('token');
    let encodedMessage = new URLSearchParams(search).get('m');
    let decodedMessage = '';

    try {
      if (encodedMessage) {
        decodedMessage = decodeURIComponent(atob(encodedMessage));
        addToast({
          title: decodedMessage,
          type: 'error',
        });
      }
    } catch (e) {
      encodedMessage = null;
    }

    if (!token) {
      history.push('/');
      return;
    }
    const login = () => {
      setToken(token);
      history.push('/');
    };
    login();
  }, [search, addToast, setToken]);
  return <h1>aguarde...</h1>;
};

export default Sso;
