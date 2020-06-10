import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useToast } from 'context/ToastContext';
import { PROFILES } from 'config/constants';

import { FiUser, FiLock, FiSmartphone } from 'react-icons/fi';

import {
  Title,
  Info,
  Separator,
  Avatar,
  Input,
  PasswordInput,
  Button,
} from './styles';

interface FirstAccessFormData {
  cpf: string;
  password: string;
}

const Form: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const inputRole = 'secondary';

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

  const componentsByProfile = {
    [PROFILES.fmc]: () => (
      <>
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
      </>
    ),
    [PROFILES.focalPoint]: () => (
      <>
        <Info>
          <span>Empresa</span>
          <p>Agro Amazônia</p>
        </Info>
      </>
    ),
  };

  // Pegar do retorno da API
  const profile = 'focal_point';

  return (
    <FormContext {...methods}>
      <form onSubmit={onSubmit}>
        <Title>
          Ativar cadastro - <strong>Equipe FMC</strong>
        </Title>
        <Avatar name="avatar" inputRole={inputRole} />
        {componentsByProfile[profile]()}
        <Input
          name="nickname"
          icon={FiUser}
          label="Como gostaria de ser chamado*"
          inputRole={inputRole}
        />
        <Input
          name="name"
          icon={FiUser}
          label="Nome completo*"
          inputRole={inputRole}
        />
        <Input
          name="email"
          icon={FiUser}
          label="Email*"
          inputRole={inputRole}
        />
        <Input
          name="cpf"
          icon={FiUser}
          label="CPF*"
          numbersOnly
          pattern="XXX.XXX.XXX-XX"
          inputRole={inputRole}
        />
        <Input
          name="mobile"
          icon={FiSmartphone}
          numbersOnly
          pattern="(XX) X XXXX-XXXX"
          label="Celular*"
          inputRole={inputRole}
        />
        <Separator />
        <Title>Segurança</Title>
        <PasswordInput
          name="password"
          icon={FiLock}
          label="Senha"
          inputRole={inputRole}
        />
        <PasswordInput
          name="confirm_password"
          icon={FiLock}
          label="Confirmar Senha"
          inputRole={inputRole}
        />
        <Button type="submit" buttonRole="primary" loading={loading}>
          Enviar cadastro para aprovação
        </Button>
      </form>
    </FormContext>
  );
};

export default Form;
