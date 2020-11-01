import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import { Establishment } from 'services/auth/interfaces/Participant';
import { getFirstName } from 'util/string';
import Avatar from 'components/Avatar';
import Dropdown from './Dropdown';
import { Wrapper, WelcomeText, Hello } from './styles';

interface ParticipantProps {
  picture: string | null;
  name: string;
  establishment: Establishment | null;
  points?: number;
  signOut(): void;
  simulating: boolean;
}
const Participant: React.FC<ParticipantProps> = ({
  picture,
  name,
  establishment,
  points,
  signOut,
  simulating,
}) => {
  return (
    <Wrapper>
      <Avatar name={name} picture={picture} circleDimension={40} />
      <WelcomeText>
        <Hello>Olá {getFirstName(name)}!</Hello>
        {typeof points === 'number' && <span>Meus pontos: {points}</span>}
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
