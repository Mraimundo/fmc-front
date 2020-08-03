import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import Avatar from 'components/Avatar';
import Dropdown from './Dropdown';
import { Wrapper, WelcomeText, Hello } from './styles';

interface ParticipantProps {
  picture: string | null;
  name: string;
  establishment: string;
  points: number;
  signOut(): void;
}
const Participant: React.FC<ParticipantProps> = ({
  picture,
  name,
  establishment,
  points,
  signOut,
}) => {
  return (
    <Wrapper>
      <Avatar name={name} picture={picture} circleDimension={40} />
      <WelcomeText>
        <Hello>Olá {name}!</Hello>
        <span>Meus pontos: {points}</span>
      </WelcomeText>
      <AiFillCaretDown />
      <Dropdown establishment={establishment} signOut={signOut} />
    </Wrapper>
  );
};

export default Participant;
