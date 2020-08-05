import React, { useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

import ModalRegulations from 'components/Regulation/AllRegulationsOneByOne';
import { useAuth } from 'context/AuthContext';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Logo from 'components/shared/Logo';
import { defaultTheme, cooperativaTheme } from 'styles/theme';
import Popups from './Popups';

import { Container } from './styles';

const Dashboard: React.FC = ({ children }) => {
  const { shouldShowRegulationsModal, participant } = useAuth();
  const [theme, setTheme] = useState(defaultTheme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!participant || !participant.id) return;
    if (participant.establishment.type_name === 'Cooperativa') {
      setTheme(cooperativaTheme);
    }
    setLoading(false);
  }, [participant]);

  return !loading ? (
    <>
      <ThemeContext.Provider value={theme}>
        {shouldShowRegulationsModal ? (
          <ModalRegulations opened={shouldShowRegulationsModal} />
        ) : (
          <Container>
            <Logo logoType={participant.establishment.type_name} />
            <Header />
            {children}
            {!shouldShowRegulationsModal && <Popups />}
            <Footer />
          </Container>
        )}
      </ThemeContext.Provider>
    </>
  ) : (
    <></>
  );
};

export default Dashboard;
