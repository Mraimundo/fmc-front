import React, { useState } from 'react';

import { Establishment } from 'services/auth/interfaces/Participant';
import { getFirstName } from 'util/string';
import Avatar from 'components/Avatar';
import { IProfile } from 'config/constants';
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
  profile: IProfile | null;
  establishment: Establishment | null;
  points: number;
}
const Participant: React.FC<ParticipantProps> = ({
  picture,
  name,
  profile,
  establishment,
  points,
}) => {
  const [isProducer] = useState(() => profile === 'PRODUTOR');
  return (
    <Wrapper>
      <Avatar name={name} picture={picture} circleDimension={50} />
      <WrapperInformations>
        <Hello>Olá {getFirstName(name)}!</Hello>
        <Points>Meus pontos: {points}</Points>
        {!!establishment && !isProducer && (
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
