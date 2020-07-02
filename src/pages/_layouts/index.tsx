import React, { useEffect, useState } from 'react';
import ModalRegulations from 'components/Regulation/ModalAllRegulations';
import { useAuth } from 'context/AuthContext';
import { useLocation } from 'react-router-dom';

import { useMenu } from 'context/MenuContext';
import getPopups from 'services/popup/getPopupsFromPage';
import { Popup } from 'services/popup/interfaces';
import Pop from 'components/Popup';

import Logo from 'components/shared/Logo';

import { Container } from './styles';

const PATHS_TO_NOT_SHOW_LOGO = ['/edit'];

const Dashboard: React.FC = ({ children }) => {
  const { shouldShowRegulationsModal } = useAuth();
  const { menuSelected } = useMenu();
  const [popups, setPopups] = useState<Popup[]>([]);
  const [popOpened, setPopOpened] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (menuSelected && pathname === menuSelected.address) {
      getPopups(menuSelected.address).then(data => setPopups(data));
    }
  }, [menuSelected, pathname]);

  useEffect(() => {
    if (PATHS_TO_NOT_SHOW_LOGO.indexOf(pathname) >= 0) {
      setShowLogo(false);
      return;
    }
    setShowLogo(true);
  }, [pathname]);

  return (
    <Container>
      {showLogo && <Logo />}
      {children}
      {popups.map(item => (
        <Pop
          key={`popup-${item.id}`}
          popup={item}
          isOpen={popOpened && !shouldShowRegulationsModal}
          onRequestClose={() => {
            setPopOpened(false);
          }}
        />
      ))}
      <ModalRegulations isOpen={shouldShowRegulationsModal} />
    </Container>
  );
};

export default Dashboard;
