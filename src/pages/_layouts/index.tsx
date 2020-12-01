import React, { useEffect, useState } from 'react';

import Manutencao from 'assets/images/manutencao.jpg';

import { DefaultTheme, ThemeContext } from 'styled-components';
import { Visible } from 'react-grid-system';
import { PROFILES, EstablishmentTypes } from 'config/constants';

import ModalRegulations from 'components/Regulation/AllRegulationsOneByOne';
import { useAuth } from 'context/AuthContext';
import Header from 'components/Header';
import MobileHeader from 'components/Header/MobileHeader';
import Footer from 'components/Footer';
import Logo from 'components/shared/Logo';
import { defaultTheme, cooperativaTheme, fmcTeamTheme } from 'styles/theme';
import Popups from './Popups';

import { Container, SimulateIndicator } from './styles';

const Dashboard: React.FC = ({ children }) => {
  const {
    shouldShowRegulationsModal,
    participant,
    simulating,
    signOut,
  } = useAuth();
  const [theme, setTheme] = useState<DefaultTheme | null>(null);
  const [textSimulating, setTextSimulating] = useState('');

  useEffect(() => {
    if (!participant || !participant.id) return;

    if (participant.profile === 'FMC') {
      setTheme(fmcTeamTheme);
      return;
    }

    if (participant.establishment.type_name === EstablishmentTypes.Resale) {
      setTheme(defaultTheme);
      return;
    }

    if (
      participant.establishment.type_name === EstablishmentTypes.Cooperative
    ) {
      setTheme(cooperativaTheme);
    }
  }, [participant]);

  useEffect(() => {
    setTextSimulating('');
    if (!simulating) {
      setTextSimulating('');
      return;
    }
    if (participant.profile === PROFILES.focalPoint) {
      setTextSimulating('Visão do Focal Point');
      return;
    }
    setTextSimulating('Visão do Participante');
  }, [participant, simulating]);

  const manutencao = false;

  if (manutencao) {
    return (
      <Container simulating={false}>
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
    <>
      <ThemeContext.Provider value={theme}>
        {!simulating && shouldShowRegulationsModal ? (
          <ModalRegulations opened={shouldShowRegulationsModal} />
        ) : (
          <>
            {simulating && (
              <SimulateIndicator>
                <span>{textSimulating}</span>
                <button onClick={signOut} type="button">
                  Sair
                </button>
              </SimulateIndicator>
            )}
            <Container simulating={simulating}>
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
          </>
        )}
      </ThemeContext.Provider>
    </>
  ) : (
    <></>
  );
};

export default Dashboard;
