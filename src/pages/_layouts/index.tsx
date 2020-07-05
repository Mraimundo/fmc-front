import React, { useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import ModalRegulations from 'components/Regulation/ModalAllRegulations';
import { useAuth } from 'context/AuthContext';
import { useLocation } from 'react-router-dom';

import { defaultTheme, cooperativaTheme } from 'styles/theme';

import Logo from 'components/shared/Logo';
import Popups from './Popups';

import { Container } from './styles';

const PATHS_TO_NOT_SHOW_LOGO = ['/edit'];

const Dashboard: React.FC = ({ children }) => {
  const { shouldShowRegulationsModal } = useAuth();
  const [showLogo, setShowLogo] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (PATHS_TO_NOT_SHOW_LOGO.indexOf(pathname) >= 0) {
      setShowLogo(false);
      return;
    }
    setShowLogo(true);
  }, [pathname]);

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <Container>
        {showLogo && <Logo />}
        {children}
        {!shouldShowRegulationsModal && <Popups />}
        <ModalRegulations isOpen={shouldShowRegulationsModal} />
      </Container>
    </ThemeContext.Provider>
  );
};

export default Dashboard;
