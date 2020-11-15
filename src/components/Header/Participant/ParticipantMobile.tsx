import React from 'react';

import {
  Establishment,
  Participant as IParticipant,
} from 'services/auth/interfaces/Participant';
import { getFirstName } from 'util/string';
import Avatar from 'components/Avatar';
import { PROFILES } from 'config/constants';
import {
  Wrapper,
  WrapperInformations,
  Hello,
  Points,
  EstablishmentRtc,
} from './ParticipantMobile.styles';

interface ParticipantProps {
  picture: string | null;
  name: string;
  establishment: Establishment | null;
  points: number;
  participant: IParticipant;
}
const Participant: React.FC<ParticipantProps> = ({
  picture,
  name,
  establishment,
  points,
  participant,
}) => {
  return (
    <Wrapper>
      <Avatar name={name} picture={picture} circleDimension={50} />
      <WrapperInformations>
        <Hello>Olá {getFirstName(name)}!</Hello>
        {(participant.profile !== PROFILES.focalPoint ||
          (participant.access_premio_ideall &&
            participant.establishment.team_receives_points)) &&
          typeof points === 'number' && <Points>Meus pontos: {points}</Points>}
        {!!establishment && (
          <>
            <EstablishmentRtc>{establishment.name}</EstablishmentRtc>
            {establishment.rtc_name && (
              <EstablishmentRtc>RTC: {establishment.rtc_name}</EstablishmentRtc>
            )}
          </>
        )}
      </WrapperInformations>
    </Wrapper>
  );
};

export default Participant;
