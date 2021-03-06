import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routeMap from 'routes/route-map';
import { Establishment as IEstablishment } from 'services/auth/interfaces/Participant';
import { IProfile } from 'config/constants';
import {
  DropdownList,
  ParticipantMenuList,
  ProfileInfo,
  Establishment,
} from './Dropdown.styles';

interface DropdownProps {
  establishment: IEstablishment | null;
  profile: IProfile | null;
  signOut(): void;
  simulating: boolean;
}
const Dropdown: React.FC<DropdownProps> = ({
  establishment,
  profile,
  signOut,
  simulating,
}) => {
  const [isProducer] = useState(() => profile === 'PRODUTOR');

  return (
    <DropdownList>
      {!!establishment && !isProducer && (
        <ProfileInfo>
          <Establishment>{establishment.client_group}</Establishment>
          {establishment.rtc_name && <span>RTC: {establishment.rtc_name}</span>}
        </ProfileInfo>
      )}
      <ParticipantMenuList notshowseparator={!establishment || isProducer}>
        <li>
          {simulating ? (
            <span>Meu perfil</span>
          ) : (
            <Link to={routeMap.profile}>Meu perfil</Link>
          )}
        </li>
        <li>
          <a href="#sair" onClick={signOut}>
            Sair
          </a>
        </li>
      </ParticipantMenuList>
    </DropdownList>
  );
};

export default Dropdown;
