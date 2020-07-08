import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import history from 'services/history';
import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';

const Autologin: React.FC = () => {
  const { search } = useLocation();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  useEffect(() => {
    const token = new URLSearchParams(search).get('token');
    if (!token) {
      history.push('/');
      return;
    }
    const login = async () => {
      try {
        await signIn(token);
      } catch {
        addToast({
          title: 'Token inválido',
          type: 'error',
        });
      }
      history.push('/');
    };
    login();
  }, [search, signIn, addToast]);

  return <h1>Aguarde enquanto o login automático é realizado ...</h1>;
};

export default Autologin;
