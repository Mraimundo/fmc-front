import React, { useMemo } from 'react';
import { PROFILES } from 'config/constants';
import { Participant } from 'services/auth/interfaces/Participant';
import { Info, Input } from './styles';

interface Props {
  participant: Participant;
  inputRole: 'primary' | 'secondary';
}

const ComponentsByProfile: React.FC<Props> = ({ participant, inputRole }) => {
  const componentsByProfile = useMemo(
    () => ({
      [PROFILES.fmc]: () => (
        <>
          <Info>
            <span>Departamento</span>
            <p>{participant.department || 'Não informado'}</p>
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
            <p>{participant.establishment.client_group}</p>
          </Info>
          <Input
            name="role.name"
            label="Cargo*"
            inputRole={inputRole}
            value={participant.role.name}
            disabled
            shouldRegister={false}
          />
        </>
      ),
      [PROFILES.participant]: () => (
        <>
          <Info>
            <span>Empresa</span>
            <p>{participant.establishment.client_group}</p>
          </Info>
          <Info>
            <span>Filial</span>
            <p>{participant.subsidiary.name || 'Não Informado'}</p>
          </Info>
          <Input
            name="role.name"
            label="Cargo*"
            inputRole={inputRole}
            value={participant.role.name}
            disabled
            shouldRegister={false}
          />
        </>
      ),
    }),
    [inputRole, participant],
  );

  return componentsByProfile[participant.profile]();
};

export default ComponentsByProfile;
