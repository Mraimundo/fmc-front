import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import { Establishment } from 'services/auth/interfaces/Participant';
import { getFirstName } from 'util/string';
import Avatar from 'components/Avatar';
import { Status } from 'state/modules/header/constants';
import { IProfile } from 'config/constants';
import Dropdown from './Dropdown';
import { Wrapper, WelcomeText, Hello } from './styles';
import ParticipantStatus from '../ParticipantStatus';

interface ParticipantProps {
  picture: string | null;
  name: string;
  establishment: Establishment | null;
  points?: number;
  signOut(): void;
  profile: IProfile;
}
const Participant: React.FC<ParticipantProps> = ({
  picture,
  name,
  establishment,
  points,
  signOut,
  profile,
}) => {
  return (
    <Wrapper>
      {profile === 'PRODUTOR' && <ParticipantStatus status={Status.Parceiro} />}
      <Avatar name={name} picture={picture} circleDimension={40} />
      <WelcomeText>
        <Hello>Olá {getFirstName(name)}!</Hello>
        {typeof points === 'number' && <span>Meus pontos: {points}</span>}
      </WelcomeText>
      <AiFillCaretDown />
      <Dropdown
        establishment={establishment}
        profile={profile}
        signOut={signOut}
      />
    </Wrapper>
  );
};

export default Participant;
