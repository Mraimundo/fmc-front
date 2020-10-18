import React, { useEffect, useState } from 'react';

import Manutencao from 'assets/images/manutencao.jpg';

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
    if (!participant || !participant.id) {
      setTheme(null);
      return;
    }

    if (participant.profile === 'FMC') {
      setTheme(fmcTeamTheme);
      return;
    }

    if (participant.profile === 'PRODUTOR') {
      setTheme(fmcProdutorTheme);
      return;
    }

    if (
      participant.establishment.type_name === EstablishmentTypes.Cooperative
    ) {
      setTheme(cooperativaTheme);
      return;
    }

    setTheme(defaultTheme);
  }, [participant]);

  const manutencao = false;

  if (manutencao) {
    return (
      <Container>
        <Logo logoType="fmcTeam" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '80vh',
          }}
        >
          <img src={Manutencao} alt="Site em Manutenção" />
        </div>
      </Container>
    );
  }

  return theme ? (
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
  ) : (
    <></>
  );
};

export default Dashboard;
