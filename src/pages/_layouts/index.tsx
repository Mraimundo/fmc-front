import React, { useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Visible } from 'react-grid-system';

import { EstablishmentTypes } from 'config/constants';
import ModalRegulations from 'components/Regulation/AllRegulationsOneByOne';
import { useAuth } from 'context/AuthContext';
import Header from 'components/Header';
import MobileHeader from 'components/Header/MobileHeader';
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
    if (
      participant.establishment.type_name === EstablishmentTypes.Cooperative
    ) {
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
            <Visible xl xxl>
              <Header />
            </Visible>
            <Visible xs sm md lg>
              <MobileHeader />
            </Visible>
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
