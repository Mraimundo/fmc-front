import React, { useState, useEffect } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import { PROFILES } from 'config/constants';
import { Participant } from 'services/auth/interfaces/Participant';
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
  BoxAutoIndication,
} from './styles';

interface Props {
  participant: Participant;
  saveParticipant(data: Participant): Promise<void>;
  editing?: boolean;
}

interface FormData extends Participant {
  marital_status_select: { title: string; value: string } | null;
  education_level_select: { title: string; value: string } | null;
  gender_select: { title: string; value: string } | null;
  public_place_select: { title: string; value: string } | null;
  formatted_birth_date: string;
  state_code_select: { title: string; value: string } | null;
  rg_emitter_uf_select: { title: string; value: string } | null;
}

const Form: React.FC<Props> = ({
  participant,
  saveParticipant,
  editing = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [autoindicate, setAutoindicate] = useState(false);
  const inputRole = 'secondary';

  const schema = getschemaValidations(
    participant.profile,
    editing,
    autoindicate,
  );

  useEffect(() => {
    if (participant.profile === PROFILES.focalPoint) {
      setAutoindicate(participant.access_premio_ideall);
    }
  }, [participant.profile, participant.access_premio_ideall]);

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
    defaultValues: {
      ...participant,
      formatted_birth_date:
        participant?.birth_date?.replace(
          /(\d{4})-(\d{2})-(\d{2}).*/,
          '$3/$2/$1',
        ) || '',
      gender_select: participant.gender
        ? {
            value: participant.gender,
            title:
              participant.gender.toLowerCase() === 'm'
                ? 'Masculino'
                : 'Feminino',
          }
        : null,
      public_place_select: participant.address.public_place
        ? {
            title: participant.address.public_place || '',
            value: participant.address.public_place || '',
          }
        : null,
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
      state_code_select: participant.address?.state_code
        ? {
            title: participant.address.state_code || '',
            value: participant.address.state_code || '',
          }
        : null,
      rg_emitter_uf_select: participant.rg_emitter_uf
        ? {
            title: participant.rg_emitter_uf,
            value: participant.rg_emitter_uf,
          }
        : null,
    },
  });

  const { handleSubmit } = methods;

  /* Refatorar
    -> Usar um DTO, transformas os dados antes do envio atraves de um serviço que
      pegue uma interface participante e devolva um dto nos moldes que o end point precisa
    -> Usar um transformer local que pegue a Interface Participante e transforme nos moldes
      que o Form precisa
    -> Isso facilitaria o entendimento da tela e futuros ajustes
  */
  const onSubmit = handleSubmit(async data => {
    setLoading(true);

    await saveParticipant({
      ...data,
      marital_status: data?.marital_status_select?.value || '',
      education_level: data?.education_level_select?.value || '',
      gender: data?.gender_select?.value || '',
      address: {
        ...data.address,
        public_place: data?.public_place_select?.value || '',
        state_code: data?.state_code_select?.value || '',
      },
      birth_date: data.formatted_birth_date,
      rg_emitter_uf: data.rg_emitter_uf_select?.value || '',
      access_premio_ideall:
        participant.profile !== PROFILES.focalPoint || autoindicate,
    });
    setLoading(false);
  });

  return (
    <FormContext {...methods}>
      <form onSubmit={onSubmit}>
        <Title>
          {editing ? 'Editar cadastro' : 'Ativar cadastro'} -{' '}
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
          label="Como gostaria de ser chamado*"
          inputRole={inputRole}
        />
        <Input
          name="name"
          label="Nome completo*"
          inputRole={inputRole}
          disabled={
            participant.profile === 'FMC' ||
            participant.profile === 'FOCALPOINT'
          }
        />
        <Input
          name="email"
          label="E-mail*"
          inputRole={inputRole}
          disabled={
            participant.profile === 'FMC' ||
            participant.profile === 'FOCALPOINT'
          }
        />
        <Input
          name="cpf"
          label="CPF*"
          numbersOnly
          pattern="XXX.XXX.XXX-XX"
          inputRole={inputRole}
          disabled={participant.cpf !== ''}
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
            numbersOnly
            label="Celular*"
            pattern="X XXXX-XXXX"
            inputRole={inputRole}
          />
        </BoxPhone>

        {editing &&
          participant.profile === PROFILES.focalPoint &&
          !participant.access_premio_ideall && (
            <BoxAutoIndication>
              <input
                type="checkbox"
                name="test"
                checked={autoindicate}
                onChange={() => setAutoindicate(e => !e)}
              />
              <span>Participar do Catálogo de Prêmios</span>
            </BoxAutoIndication>
          )}

        {(participant.profile === PROFILES.participant ||
          (editing &&
            autoindicate &&
            participant.profile === PROFILES.focalPoint) ||
          participant.access_premio_ideall) && (
          <ExtraFieldsForParticipant inputRole={inputRole} />
        )}
        <Separator />
        <Title>Segurança</Title>
        <PasswordInput
          name="password"
          label="Senha"
          inputRole={inputRole}
          help={PasswordHelp}
        />
        <PasswordInput
          name="password_confirmation"
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
