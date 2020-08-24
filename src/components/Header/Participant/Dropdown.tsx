import React from 'react';
import { Link } from 'react-router-dom';

import routeMap from 'routes/route-map';
import { Establishment as IEstablishment } from 'services/auth/interfaces/Participant';
import {
  DropdownList,
  ParticipantMenuList,
  ProfileInfo,
  Establishment,
} from './Dropdown.styles';

interface DropdownProps {
  establishment: IEstablishment;
  signOut(): void;
}
const Dropdown: React.FC<DropdownProps> = ({ establishment, signOut }) => {
  return (
    <DropdownList>
      {!!establishment && (
        <ProfileInfo>
          <Establishment>{establishment.client_group}</Establishment>
          {establishment.rtc_name && <span>RTC: {establishment.rtc_name}</span>}
        </ProfileInfo>
      )}
      <ParticipantMenuList>
        <li>
          <Link to={routeMap.profile}>Meu perfil</Link>
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
