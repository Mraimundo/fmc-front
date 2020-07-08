import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import history from 'services/history';

const Autologin: React.FC = () => {
  const { search } = useLocation();
  const [token, setToken] = useState('');

  useEffect(() => {
    const tokenParam = new URLSearchParams(search).get('token');
    if (!tokenParam) {
      history.push('/');
    }
    setToken(tokenParam || '');
  }, [search]);

  return <h1>Autologin {token}</h1>;
};

export default Autologin;
