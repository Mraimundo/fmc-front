import React from 'react';

import { Establishment } from 'services/auth/interfaces/Participant';
import { getFirstName } from 'util/string';
import Avatar from 'components/Avatar';
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
}
const Participant: React.FC<ParticipantProps> = ({
  picture,
  name,
  establishment,
  points,
}) => {
  return (
    <Wrapper>
      <Avatar name={name} picture={picture} circleDimension={50} />
      <WrapperInformations>
        <Hello>Olá {getFirstName(name)}!</Hello>
        <Points>Meus pontos: {points}</Points>
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
