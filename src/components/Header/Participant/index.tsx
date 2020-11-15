import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import {
  Establishment,
  Participant as IParticipant,
} from 'services/auth/interfaces/Participant';
import { getFirstName } from 'util/string';
import Avatar from 'components/Avatar';
import { PROFILES } from 'config/constants';
import Dropdown from './Dropdown';
import { Wrapper, WelcomeText, Hello } from './styles';

interface ParticipantProps {
  picture: string | null;
  name: string;
  establishment: Establishment | null;
  points?: number;
  signOut(): void;
  simulating: boolean;
  participant: IParticipant;
}
const Participant: React.FC<ParticipantProps> = ({
  picture,
  name,
  establishment,
  points,
  signOut,
  simulating,
  participant,
}) => {
  return (
    <Wrapper>
      <Avatar name={name} picture={picture} circleDimension={40} />
      <WelcomeText>
        <Hello>Olá {getFirstName(name)}!</Hello>
        {(participant.profile !== PROFILES.focalPoint ||
          (participant.access_premio_ideall &&
            participant.establishment.team_receives_points)) &&
          typeof points === 'number' && <span>Meus pontos: {points}</span>}
      </WelcomeText>
      <AiFillCaretDown />
      <Dropdown
        establishment={establishment}
        signOut={signOut}
        simulating={simulating}
      />
    </Wrapper>
  );
};

export default Participant;
