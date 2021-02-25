import React from 'react';

import PasswordHelp from 'components/shared/PasswordHelp';
import { ApproverProfile, PROFILES, DM, RTC, KAM } from 'config/constants';
import { Participant } from 'services/auth/interfaces/Participant';
import ComponentsByProfile from '../Commom/ComponentsByProfile';
import ExtraFieldsForParticipant from '../Commom/ExtraFieldsForParticipant';

import {
  Title,
  Separator,
  Avatar,
  Input,
  PasswordInput,
  Button,
  BoxPhone,
  BoxAutoIndication,
  NextButtonContainer,
  NextButton,
  ComoFicouConhecendoSelectStyled,
} from './styles';
import { GenderSelect } from '../Commom/styles';

interface Props {
  participant: Participant;
  loading: boolean;
  editing: boolean;
  autoIndicate: boolean;
  setAutoIndicate(checked: boolean): void;
  inputRole: 'primary' | 'secondary';
  handleActionPageButton(): void;
  actived: boolean;
}

const PersonalDataForm: React.FC<Props> = ({
  participant,
  editing,
  inputRole,
  autoIndicate,
  setAutoIndicate,
  loading,
  handleActionPageButton,
  actived,
}) => {
  const profileValuesAllowedToShowMarketPlace: ApproverProfile[] = [
    DM,
    RTC,
    KAM,
  ];

  const shouldShowMarketPlaceFields =
    participant.profile === PROFILES.participant ||
    participant.profile === PROFILES.producer ||
    profileValuesAllowedToShowMarketPlace.includes(participant.profile_value) ||
    (editing && autoIndicate && participant.profile === PROFILES.focalPoint) ||
    participant.access_premio_ideall;

  const shouldShowBoxAutoIndication =
    editing &&
    participant.profile === PROFILES.focalPoint &&
    participant.establishment.team_receives_points &&
    !participant.access_premio_ideall;

  return (
    <div style={{ display: actived ? 'block' : 'none' }}>
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
          participant.profile === 'FMC' || participant.profile === 'FOCALPOINT'
        }
      />
      <Input
        name="email"
        label="E-mail*"
        inputRole={inputRole}
        disabled={
          participant.profile === 'FMC' || participant.profile === 'FOCALPOINT'
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

      {participant.profile === PROFILES.producer && (
        <>
          <GenderSelect name="gender_select" inputRole={inputRole} />
          <Input
            name="medium"
            label="Em qual Canal você compra os produtos FMC?"
            inputRole={inputRole}
          />
          <ComoFicouConhecendoSelectStyled
            name="get_to_know_select"
            inputRole={inputRole}
          />
          <Input
            name="formatted_birth_date"
            label="Data de nascimento* (idade mínima: 18 anos)"
            inputRole={inputRole}
            pattern="XX/XX/XXXX"
            numbersOnly
          />
        </>
      )}
      {shouldShowBoxAutoIndication && (
        <BoxAutoIndication>
          <input
            type="checkbox"
            name="test"
            checked={autoIndicate}
            onChange={() => setAutoIndicate(!autoIndicate)}
          />
          <span>Participar do Catálogo de Prêmios</span>
        </BoxAutoIndication>
      )}
      {shouldShowMarketPlaceFields && (
        <ExtraFieldsForParticipant
          inputRole={inputRole}
          participant={participant}
          autoIndicate={autoIndicate}
          setAutoIndicate={setAutoIndicate}
        />
      )}
      {participant.profile !== PROFILES.producer ? (
        <>
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
        </>
      ) : (
        <NextButtonContainer>
          <NextButton
            type="button"
            buttonRole="primary"
            onClick={handleActionPageButton}
          >
            Próximo
          </NextButton>
        </NextButtonContainer>
      )}
    </div>
  );
};

export default PersonalDataForm;
