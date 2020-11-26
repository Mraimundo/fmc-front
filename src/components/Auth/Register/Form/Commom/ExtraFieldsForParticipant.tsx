import React from 'react';

import { Participant } from 'services/auth/interfaces/Participant';
import { PROFILES } from 'config/constants';
import AddressFields from './AddressFields';
import {
  Title,
  Input,
  Separator,
  GraduationSelect,
  MaritalStatusSelect,
  GenderSelect,
  UfSelectRG,
  BoxAutoIndication,
} from './styles';

interface Props {
  inputRole: 'primary' | 'secondary';
  participant: Participant;
  autoIndicate: boolean;
  setAutoIndicate(checked: boolean): void;
}

const ExtraFieldsForParticipant: React.FC<Props> = ({
  inputRole,
  participant,
  autoIndicate,
  setAutoIndicate,
}) => {
  return (
    <>
      {participant.profile === PROFILES.producer ? (
        <>
          <AddressFields inputRole={inputRole} />
          <BoxAutoIndication style={{ display: 'none' }}>
            <input
              type="checkbox"
              name="autoindicate"
              checked={autoIndicate}
              onChange={() => setAutoIndicate(!autoIndicate)}
            />
            <span>
              Complete os dados para poder realizar resgates em cartão.
            </span>
          </BoxAutoIndication>
        </>
      ) : (
        <>
          <Separator />
          <Title>
            Completar dados - obrigatório para o Catálogo de Prêmios
          </Title>
        </>
      )}

      {autoIndicate || participant.profile !== PROFILES.producer ? (
        <>
          <GenderSelect name="gender_select" inputRole={inputRole} />

          {participant.profile !== PROFILES.producer && (
            <Input
              name="formatted_birth_date"
              label="Data de nascimento"
              inputRole={inputRole}
              pattern="XX/XX/XXXX"
            />
          )}

          <GraduationSelect
            name="education_level_select"
            inputRole={inputRole}
          />

          <Input
            name="place_of_birth"
            label="Naturalidade"
            inputRole={inputRole}
          />

          <Input
            name="nationality"
            label="Nacionalidade"
            inputRole={inputRole}
          />

          <MaritalStatusSelect
            name="marital_status_select"
            inputRole={inputRole}
          />

          <Input name="rg" label="RG" inputRole={inputRole} maxLength={13} />

          <Input
            name="rg_emitter"
            label="Órgão emissor"
            inputRole={inputRole}
          />

          <UfSelectRG
            name="rg_emitter_uf_select"
            label="UF do Órgão Emissor"
            inputRole={inputRole}
          />

          <Input
            name="pis_nis"
            label="N° inscrição na Previdência Social (PIS ou NIS)"
            inputRole={inputRole}
          />
        </>
      ) : (
        <></>
      )}

      {participant.profile !== PROFILES.producer && (
        <AddressFields inputRole={inputRole} />
      )}
    </>
  );
};

export default ExtraFieldsForParticipant;
