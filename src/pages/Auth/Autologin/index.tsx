import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import history from 'services/history';

const Autologin: React.FC = () => {
  const { search } = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(search).get('token');
    if (!token) {
      history.push('/');
    }
  }, [search]);

  return <h1>Autologin </h1>;
};

export default Autologin;
