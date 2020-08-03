import React, { useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { useLocation } from 'react-router-dom';

import ModalRegulations from 'components/Regulation/AllRegulationsOneByOne';
import { useAuth } from 'context/AuthContext';
import Header from 'components/Header';
import Logo from 'components/shared/Logo';
import { defaultTheme, cooperativaTheme } from 'styles/theme';
import Popups from './Popups';

import { Container } from './styles';

const PATHS_TO_NOT_SHOW_LOGO = ['/edit', '/regulation'];

const Dashboard: React.FC = ({ children }) => {
  const { shouldShowRegulationsModal, participant } = useAuth();
  const [showLogo, setShowLogo] = useState(false);
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    if (PATHS_TO_NOT_SHOW_LOGO.indexOf(pathname) >= 0) {
      setShowLogo(false);
      return;
    }
    setShowLogo(true);
  }, [pathname]);

  useEffect(() => {
    if (!participant || !participant.id) return;
    if (participant.establishment.type_name === 'Cooperativa') {
      setTheme(cooperativaTheme);
    }
  }, [participant]);

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Container>
          {showLogo && <Logo />}
          <Header />
          {children}
          {!shouldShowRegulationsModal && <Popups />}
        </Container>
      </ThemeContext.Provider>
      {shouldShowRegulationsModal && (
        <ModalRegulations opened={shouldShowRegulationsModal} />
      )}
    </>
  );
};

export default Dashboard;
