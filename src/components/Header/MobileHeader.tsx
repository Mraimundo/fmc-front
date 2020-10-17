/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { TiTimes } from 'react-icons/ti';

import menuIcon from 'assets/images/menu-icon.svg';
import { fetchCoinQuotation, fetchMenu } from 'state/modules/header/actions';
import useMenu from 'state/hooks/use-menu';
import { useAuth } from 'context/AuthContext';
import history from 'services/history';
import MobileMenu from './Menu/Mobile';
import ParticipantMobile from './Participant/ParticipantMobile';
import {
  HeaderToggleMenu,
  MobileNav,
  EstablishmentType,
  ClosesMenu,
} from './MobileHeader.styles';

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { participant, signOut } = useAuth();
  const { menu } = useMenu();

  const toggleMenu = useCallback(() => {
    setMenuIsOpen(!menuIsOpen);
  }, [menuIsOpen]);

  useEffect(() => {
    dispatch(fetchCoinQuotation());
    dispatch(fetchMenu());
  }, [dispatch]);

  useEffect(() => {
    history.listen((_, action) => {
      if (action === 'PUSH' && menuIsOpen) toggleMenu();
    });
  }, [toggleMenu, menuIsOpen]);

  return (
    <>
      <HeaderToggleMenu>
        <img src={menuIcon} alt="" title="" onClick={toggleMenu} />
        <EstablishmentType>
          {participant.establishment.type_name}
        </EstablishmentType>
      </HeaderToggleMenu>
      <MobileNav open={menuIsOpen}>
        <ClosesMenu onClick={toggleMenu}>
          <TiTimes />
        </ClosesMenu>
        <ParticipantMobile
          name={participant.nick_name}
          picture={participant.picture}
          points={0}
          establishment={
            participant.profile === 'FMC' ? null : participant.establishment
          }
        />
        {!!menu && <MobileMenu items={menu} signOut={signOut} />}
      </MobileNav>
    </>
  );
};

export default Header;
