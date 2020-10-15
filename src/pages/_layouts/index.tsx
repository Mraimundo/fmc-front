import React, { useEffect, useState } from 'react';
import { DefaultTheme, ThemeContext } from 'styled-components';
import { Visible } from 'react-grid-system';

import { EstablishmentTypes } from 'config/constants';
import ModalRegulations from 'components/Regulation/AllRegulationsOneByOne';
import { useAuth } from 'context/AuthContext';
import Header from 'components/Header';
import MobileHeader from 'components/Header/MobileHeader';
import Footer from 'components/Footer';
import Logo from 'components/shared/Logo';
import {
  defaultTheme,
  cooperativaTheme,
  fmcTeamTheme,
  fmcProdutorTheme,
} from 'styles/theme';
import Popups from './Popups';

import { Container } from './styles';

const Dashboard: React.FC = ({ children }) => {
  const { shouldShowRegulationsModal, participant } = useAuth();
  const [theme, setTheme] = useState<DefaultTheme | null>(null);

  useEffect(() => {
    if (!participant || !participant.id) return;

    if (participant.profile === 'FMC') {
      //setTheme(fmcTeamTheme);
      setTheme(fmcProdutorTheme);
      return;
    }

    if (participant.establishment.type_name === EstablishmentTypes.Resale) {
      //setTheme(defaultTheme);
      setTheme(fmcProdutorTheme);
      return;
    }

    if (
      participant.establishment.type_name === EstablishmentTypes.Cooperative
    ) {
      setTheme(cooperativaTheme);
    }
  }, [participant]);

  return theme ? (
    <>
      <ThemeContext.Provider value={theme}>
        {shouldShowRegulationsModal ? (
          <ModalRegulations opened={shouldShowRegulationsModal} />
        ) : (
          <Container>
            <Logo
              logoType={
                participant.profile === 'FMC'
                  ? 'fmcTeam'
                  : participant.establishment.type_name
              }
            />
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
