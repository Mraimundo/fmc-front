import React, { useState, useCallback } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useAuth } from 'context/AuthContext';
import { useToast } from 'context/ToastContext';
import validateCpf from 'util/validations/cpf';

import { Input, Button, PasswordInput } from 'components/shared';
import { useLocation } from 'react-router-dom';
import RecoverPasswordButton from './RecoverPassword';
import { SingleSignOnButton } from './styles';

interface SignInFormData {
  cpf: string;
  password: string;
}

const FormSignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const { state: defaultCpf } = useLocation<string>();

  const schema = Yup.object().shape({
    cpf: Yup.string()
      .required('CPF é obrigatório')
      .test('valid-cpf', 'CPF inválido', validateCpf),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const methods = useForm<SignInFormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
    defaultValues: {
      cpf: defaultCpf || '',
    },
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async ({ cpf, password }) => {
    setLoading(true);
    try {
      await signIn({ cpf, password });
    } catch (e) {
      addToast({
        title: e.response?.data?.message || 'Falha ao fazer login',
        type: 'error',
      });
    }
    setLoading(false);
  });

  const handleSingleSignOnClick = useCallback(() => {
    const base = process.env.REACT_APP_API_HOST;
    window.location.href = `${base}/juntos-fmc/api/v1/sso`;
  }, []);

  return (
    <FormContext {...methods}>
      <form onSubmit={onSubmit}>
        <Input
          name="cpf"
          numbersOnly
          pattern="XXX.XXX.XXX-XX"
          placeholder="CPF"
        />
        <PasswordInput name="password" placeholder="Senha" />
        <Button type="submit" buttonRole="primary" loading={loading}>
          Entrar
        </Button>
      </form>
      <RecoverPasswordButton />
      <SingleSignOnButton
        type="button"
        buttonRole="secondary"
        onClick={handleSingleSignOnClick}
      >
        Single Sign On FMC
      </SingleSignOnButton>
    </FormContext>
  );
};

export default FormSignIn;
