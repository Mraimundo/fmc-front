import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import { Establishment } from 'services/auth/interfaces/Participant';
import { useAuth } from 'context/AuthContext';
import { getFirstName } from 'util/string';
import Avatar from 'components/Avatar';
import Dropdown from './Dropdown';
import { Wrapper, WelcomeText, Hello } from './styles';
import { Status } from 'state/modules/header/constants';
import ParticipantStatus from '../ParticipantStatus';
interface ParticipantProps {
  picture: string | null;
  name: string;
  establishment: Establishment | null;
  points?: number;
  signOut(): void;
}
const Participant: React.FC<ParticipantProps> = ({
  picture,
  name,
  establishment,
  points,
  signOut,
}) => {
  const { participant } = useAuth();
  return (
    <Wrapper>
      {participant.profile === 'PRODUTOR' && (
        <ParticipantStatus status={Status.Parceiro} />
      )}
      <Avatar name={name} picture={picture} circleDimension={40} />
      <WelcomeText>
        <Hello>Olá {getFirstName(name)}!</Hello>
        {typeof points === 'number' && <span>Meus pontos: {points}</span>}
      </WelcomeText>
      <AiFillCaretDown />
      <Dropdown establishment={establishment} signOut={signOut} />
    </Wrapper>
  );
};

export default Participant;
