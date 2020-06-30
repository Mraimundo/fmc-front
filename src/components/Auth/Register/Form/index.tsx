import React, { useState } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import { PROFILES } from 'config/constants';
import { Participant } from 'services/auth/interfaces/Participant';
import { FiUser, FiLock, FiSmartphone } from 'react-icons/fi';
import PasswordHelp from 'components/shared/PasswordHelp';
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
  editing?: boolean;
}

interface FormData extends Participant {
  marital_status_select: { title: string; value: string } | null;
  education_level_select: { title: string; value: string } | null;
}

const Form: React.FC<Props> = ({
  participant,
  saveParticipant,
  editing = false,
}) => {
  const [loading, setLoading] = useState(false);
  const inputRole = 'secondary';

  const schema = getschemaValidations(participant.profile, editing);

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
    defaultValues: {
      ...participant,
      marital_status_select: participant.marital_status
        ? {
            title: participant.marital_status || '',
            value: participant.marital_status || '',
          }
        : null,
      education_level_select: participant.education_level
        ? {
            title: participant.education_level || '',
            value: participant.education_level || '',
          }
        : null,
    },
  });

  const { handleSubmit } = methods;
  const onSubmit = handleSubmit(async data => {
    setLoading(true);
    await saveParticipant({
      ...data,
      marital_status: data?.marital_status_select?.value || '',
      education_level: data?.education_level_select?.value || '',
    });
    setLoading(false);
  });

  return (
    <FormContext {...methods}>
      <form onSubmit={onSubmit}>
        <Title>
          Ativar cadastro -
          <strong>
            {participant.profile === 'FMC' && 'Equipe FMC'}
            {participant.profile === 'FOCALPOINT' && 'Focal Point'}
            {participant.profile === 'PARTICIPANTE' && 'Participante'}
          </strong>
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
          disabled={participant.profile === 'FMC'}
        />
        <Input
          name="email"
          icon={FiUser}
          label="Email*"
          inputRole={inputRole}
          disabled={participant.profile === 'FMC'}
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
          help={PasswordHelp}
        />
        <PasswordInput
          name="password_confirmation"
          icon={FiLock}
          label="Confirmar Senha"
          inputRole={inputRole}
        />
        <Button type="submit" buttonRole="primary" loading={loading}>
          Confirmar
        </Button>
      </form>
    </FormContext>
  );
};

export default Form;
