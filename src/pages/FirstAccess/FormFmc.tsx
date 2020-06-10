import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useToast } from 'context/ToastContext';

import { Input, Button, PasswordInput } from 'components/shared';

import { FiUser, FiLock } from 'react-icons/fi';

interface FirstAccessFormData {
  cpf: string;
  password: string;
}

const FormFmc: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const schema = Yup.object().shape({
    cpf: Yup.string().required('Cpf é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const methods = useForm<FirstAccessFormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async ({ cpf, password }) => {
    setLoading(true);
    try {
      // Chamar Serviço de Registro
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
        <Title>Ativar cadastro - Equipe FMC</Title>
        <Avatar />
        <Info>
          <span>Departamento</span>
          <p>CRM</p>
        </Info>
        <Info>
          <span>Seu cargo</span>
          <p>Gerente</p>
        </Info>
        <Info>
          <span>UPN</span>
          <p>fernanda.pelegrinoti</p>
        </Info>
        <Input
          name="nickname"
          icon={FiUser}
          label="Como gostaria de ser chamado"
        />
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
      </form>
    </FormContext>
  );
};

export default FormFmc;
