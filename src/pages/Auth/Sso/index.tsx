import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import history from 'services/history';
import { useAuth } from 'context/AuthContext';

const Sso: React.FC = () => {
  const { search } = useLocation();
  const { setToken } = useAuth();

  useEffect(() => {
    const token = new URLSearchParams(search).get('token');

    if (!token) {
      history.push('/');
      return;
    }
    const login = () => {
      setToken(token);
      history.push('/');
    };
    login();
  }, [search, setToken]);
  return <h1>aguarde...</h1>;
};

export default Sso;
