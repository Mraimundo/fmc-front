import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';

import { Button, PasswordInput, Input } from 'components/shared';
import { FiUser, FiLock } from 'react-icons/fi';

interface SignInFormData {
  cpf: string;
  password: string;
}

const FormSignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    cpf: Yup.string().required('Cpf é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const methods = useForm<SignInFormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onBlur',
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async ({ cpf, password }) => {
    setLoading(true);
    try {
      await signIn({ cpf, password });
      addToast({
        title: 'Login realizado com sucesso!',
        type: 'success',
      });
    } catch (e) {
      addToast({
        description: e.response?.data?.message || 'Falha ao fazer login',
        type: 'error',
        title: 'Erro',
      });
    }
    setLoading(false);
  });

  return (
    <FormContext {...methods}>
      <form onSubmit={onSubmit}>
        <Input
          name="cpf"
          icon={FiUser}
          label="CPF"
          numbersOnly
          pattern="XXX.XXX.XXX-XX"
        />
        <PasswordInput name="password" icon={FiLock} label="Senha" />
        <Button type="submit" buttonRole="primary" loading={loading}>
          Entrar
        </Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
    </FormContext>
  );
};

export default FormSignIn;
