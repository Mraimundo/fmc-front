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

interface PopupTest extends Popup {
  opened: boolean;
}

const PATHS_TO_NOT_SHOW_LOGO = ['/edit'];

const Dashboard: React.FC = ({ children }) => {
  const { shouldShowRegulationsModal } = useAuth();
  const { menuSelected } = useMenu();
  const [popups, setPopups] = useState<PopupTest[]>([]);
  const [showLogo, setShowLogo] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (menuSelected && pathname === menuSelected.address) {
      getPopups(menuSelected.address).then(data => {
        setPopups(data.map(item => ({ ...item, opened: true })));
      });
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
          isOpen={item.opened && !shouldShowRegulationsModal}
          onRequestClose={() => {
            setPopups(e =>
              e.map(i => {
                if (i.id === item.id) {
                  i.opened = false;
                }
                return i;
              }),
            );
          }}
        />
      ))}
      <ModalRegulations isOpen={shouldShowRegulationsModal} />
    </Container>
  );
};

export default Dashboard;
