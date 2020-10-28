import React, { useState, useEffect } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import { PROFILES } from 'config/constants';
import { Participant } from 'services/auth/interfaces/Participant';
import getschemaValidations from './Validators/getSchemaValidations';
import ProducerHeader, { Tab } from './Producer/Header';
import PersonalDataForm from './PersonalDataForm';

import { Title } from './styles';

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
  const [activeTab, setActiveTab] = React.useState<Tab>('PERSONAL_DATA');
  const inputRole = 'secondary';

  const schema = getschemaValidations(
    participant.profile,
    editing,
    autoindicate,
  );

  useEffect(() => {
    if (participant.profile === PROFILES.focalPoint) {
      setAutoindicate(
        participant.access_premio_ideall &&
          participant.establishment.team_receives_points,
      );
    }
  }, [
    participant.profile,
    participant.access_premio_ideall,
    participant.establishment.team_receives_points,
  ]);

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
        {participant.profile === PROFILES.producer ? (
          <>
            <Title>
              {editing ? 'Editar cadastro' : 'Bem-vindo Produtor(a)'}
            </Title>
            <ProducerHeader activeTab={activeTab} setActiveTab={setActiveTab} />
          </>
        ) : (
          <Title>
            {editing ? 'Editar cadastro' : 'Ativar cadastro'} -{' '}
            <strong>
              {participant.profile === 'FMC' && 'Equipe FMC'}
              {participant.profile === 'FOCALPOINT' && 'Focal Point'}
              {participant.profile === 'PARTICIPANTE' && 'Participante'}
            </strong>
          </Title>
        )}
        {activeTab === 'PERSONAL_DATA' && (
          <PersonalDataForm
            participant={participant}
            editing={editing}
            inputRole={inputRole}
            autoIndicate={autoindicate}
            setAutoIndicate={setAutoindicate}
            loading={loading}
          />
        )}
      </form>
    </FormContext>
  );
};

export default Form;
