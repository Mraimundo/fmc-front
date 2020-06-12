import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import * as Yup from 'yup';
import { useToast } from 'context/ToastContext';
import { PROFILES } from 'config/constants';
import { Participant } from 'services/register/getParticipantData';

import { FiUser, FiLock, FiSmartphone } from 'react-icons/fi';

import {
  Title,
  Info,
  Separator,
  Avatar,
  Input,
  PasswordInput,
  Button,
  BoxPhone,
} from './styles';

interface Props {
  participant: Participant;
  saveParticipant(data: Participant): Promise<boolean>;
}

const Form: React.FC<Props> = ({ participant, saveParticipant }) => {
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();
  const inputRole = 'secondary';

  const schema = Yup.object().shape({});

  const methods = useForm<Participant>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
    defaultValues: participant,
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async data => {
    saveParticipant(data);
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
          <p>{participant.department}</p>
        </Info>
        <Info>
          <span>Seu cargo</span>
          <p>{participant.role.name}</p>
        </Info>
        <Info>
          <span>UPN</span>
          <p>{participant.upn}</p>
        </Info>
      </>
    ),
    [PROFILES.focalPoint]: () => (
      <>
        <Info>
          <span>Empresa</span>
          <p>{participant.establishment.name}</p>
        </Info>
        <Input
          name="role.name"
          icon={FiUser}
          label="Cargo*"
          inputRole={inputRole}
          value={participant.role.name}
          disabled
          shouldRegister={false}
        />
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
        <Avatar name="picture" inputRole={inputRole} />
        {componentsByProfile[profile]()}
        <Input
          name="nick_name"
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
        <BoxPhone>
          <Input
            name="area_code"
            numbersOnly
            pattern="(XX)"
            label="DDD*"
            inputRole={inputRole}
          />
          <Input
            name="cell_phone"
            icon={FiSmartphone}
            numbersOnly
            label="Celular*"
            pattern="X XXXX-XXXX"
            inputRole={inputRole}
          />
        </BoxPhone>

        <Separator />
        <Title>Segurança</Title>
        <PasswordInput
          name="password"
          icon={FiLock}
          label="Senha"
          inputRole={inputRole}
        />
        <PasswordInput
          name="password_confirmation"
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
