import React, { useState, useEffect, useCallback } from 'react';

import { useForm, FormContext } from 'react-hook-form';
import { PROFILES } from 'config/constants';
import { MemberGroup, Participant } from 'services/auth/interfaces/Participant';
import getschemaValidations from './Validators/getSchemaValidations';
import ProducerHeader, { Tab } from './Producer/Header';
import PersonalDataForm from './PersonalDataForm';
import FarmDataForm from './FarmDataForm';
import HarvestDataForm from './HarvestDataForm';
import SecurityDataForm from './SecurityDataForm';

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
  get_to_know_select: { title: string; value: string } | null;
}

const Form: React.FC<Props> = ({
  participant: _participant,
  saveParticipant,
  editing = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [autoindicate, setAutoindicate] = useState(false);
  const [activeTab, setActiveTab] = React.useState<Tab>('PERSONAL_DATA');
  const [participant, setParticipant] = useState<Participant>(_participant);
  const inputRole = 'secondary';

  const schema = getschemaValidations(
    _participant.profile,
    editing,
    autoindicate,
  );

  useEffect(() => {
    if (_participant.profile === PROFILES.focalPoint) {
      setAutoindicate(
        _participant.access_premio_ideall &&
          _participant.establishment.team_receives_points,
      );
    }
  }, [
    _participant.profile,
    _participant.access_premio_ideall,
    _participant.establishment.team_receives_points,
  ]);

  const addMemberGroup = useCallback((member: MemberGroup): void => {
    setParticipant(oldData => ({
      ...oldData,
      members_group: [...(oldData.members_group || []), member],
    }));
  }, []);

  const removeMemberGroup = useCallback((member: MemberGroup): void => {
    setParticipant(oldData => ({
      ...oldData,
      members_group: [
        ...oldData.members_group.filter(
          item => item.cpf_cnpj !== member.cpf_cnpj,
        ),
      ],
    }));
  }, []);

  const methods = useForm<FormData>({
    validationSchema: schema,
    reValidateMode: 'onBlur',
    mode: 'onSubmit',
    defaultValues: {
      ..._participant,
      formatted_birth_date:
        _participant?.birth_date?.replace(
          /(\d{4})-(\d{2})-(\d{2}).*/,
          '$3/$2/$1',
        ) || '',
      gender_select: _participant.gender
        ? {
            value: _participant.gender,
            title:
              _participant.gender.toLowerCase() === 'm'
                ? 'Masculino'
                : 'Feminino',
          }
        : null,
      public_place_select: _participant.address?.public_place
        ? {
            title: _participant.address.public_place || '',
            value: _participant.address.public_place || '',
          }
        : null,
      marital_status_select: _participant.marital_status
        ? {
            title: _participant.marital_status || '',
            value: _participant.marital_status || '',
          }
        : null,
      education_level_select: _participant.education_level
        ? {
            title: _participant.education_level || '',
            value: _participant.education_level || '',
          }
        : null,
      state_code_select: _participant.address?.state_code
        ? {
            title: _participant.address.state_code || '',
            value: _participant.address.state_code || '',
          }
        : null,
      rg_emitter_uf_select: _participant.rg_emitter_uf
        ? {
            title: _participant.rg_emitter_uf,
            value: _participant.rg_emitter_uf,
          }
        : null,
      get_to_know_select: _participant.get_to_know
        ? {
            title: _participant.get_to_know || '',
            value: _participant.get_to_know || '',
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
      get_to_know: data?.get_to_know_select?.value || '',
      members_group: [...(participant.members_group || [])],
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
        _participant.profile !== PROFILES.focalPoint || autoindicate,
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
        <PersonalDataForm
          participant={participant}
          editing={editing}
          inputRole={inputRole}
          autoIndicate={autoindicate}
          setAutoIndicate={setAutoindicate}
          loading={loading}
          handleActionPageButton={() => setActiveTab('FARM_DATA')}
          actived={activeTab === 'PERSONAL_DATA'}
        />
        <FarmDataForm
          participant={participant}
          addMemberGroup={addMemberGroup}
          removeMemberGroup={removeMemberGroup}
          handleActionPageButton={() => setActiveTab('HARVEST_DATA')}
          actived={activeTab === 'FARM_DATA'}
        />
        <HarvestDataForm
          handleActionPageButton={() => setActiveTab('SECURITY_DATA')}
          actived={activeTab === 'HARVEST_DATA'}
        />
        <SecurityDataForm
          inputRole={inputRole}
          loading={loading}
          actived={activeTab === 'SECURITY_DATA'}
        />
      </form>
    </FormContext>
  );
};

export default Form;
