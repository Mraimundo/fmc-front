import React from 'react';
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
}
const Dropdown: React.FC<DropdownProps> = ({
  establishment,
  profile,
  signOut,
}) => {
  const isProdutor = profile === 'PRODUTOR';
  return (
    <DropdownList>
      {!!establishment && !isProdutor && (
        <ProfileInfo>
          <Establishment>{establishment.client_group}</Establishment>
          {establishment.rtc_name && <span>RTC: {establishment.rtc_name}</span>}
        </ProfileInfo>
      )}
      <ParticipantMenuList notshowseparator={!establishment || isProdutor}>
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
