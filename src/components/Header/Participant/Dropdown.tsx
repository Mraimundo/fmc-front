import React from 'react';
import { Link } from 'react-router-dom';

import {
  DropdownList,
  ParticipantMenuList,
  ProfileInfo,
  Establishment,
} from './Dropdown.styles';

interface DropdownProps {
  establishment: string;
  signOut(): void;
}
const Dropdown: React.FC<DropdownProps> = ({ establishment, signOut }) => {
  return (
    <DropdownList>
      <ProfileInfo>
        <Establishment>{establishment}</Establishment>
        <span>RTC: Alfredo Silva</span>
      </ProfileInfo>
      <ParticipantMenuList>
        <li>
          <Link to="/edit">Meu perfil</Link>
        </li>
        <li>
          <Link to="/alterar-senha">Alterar senha</Link>
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
