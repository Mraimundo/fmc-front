import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import { PROFILES } from 'config/constants';
import { Participant } from 'services/auth/interfaces/Participant';
import { FiUser, FiLock, FiSmartphone } from 'react-icons/fi';
import ComponentsByProfile from './ComponentsByProfile';
import ExtraFieldsForParticipant from './ExtraFieldsForParticipant';
import getschemaValidations from './getSchemaValidations';

import {
  Title,
  Separator,
  Avatar,
  Input,
  PasswordInput,
  Button,
  BoxPhone,
} from './styles';

interface Props {
  participant: Participant;
  saveParticipant(data: Participant): Promise<void>;
}

const Form: React.FC<Props> = ({ participant, saveParticipant }) => {
  const [loading, setLoading] = useState(false);
  const inputRole = 'secondary';

  const schema = getschemaValidations(participant.profile);

  const methods = useForm<Participant>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
    defaultValues: participant,
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async data => {
    setLoading(true);
    await saveParticipant(data);
    setLoading(false);
  });

  return (
    <FormContext {...methods}>
      <form onSubmit={onSubmit}>
        <Title>
          Ativar cadastro - <strong>Equipe FMC</strong>
        </Title>
        <Avatar name="picture" inputRole={inputRole} />
        <ComponentsByProfile participant={participant} inputRole={inputRole} />
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

        {participant.profile === PROFILES.participant && (
          <ExtraFieldsForParticipant inputRole={inputRole} />
        )}

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
