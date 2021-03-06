import React, { useEffect, useState } from 'react';

import Manutencao from 'assets/images/manutencao.jpg';

import { DefaultTheme, ThemeContext } from 'styled-components';
import { Visible } from 'react-grid-system';
import {
  PROFILES,
  EstablishmentTypes,
  ApproverProfile,
  DM,
  RTC,
  KAM,
} from 'config/constants';

import ModalRegulations from 'components/Regulation/AllRegulationsOneByOne';
import { useAuth } from 'context/AuthContext';
import Header from 'components/Header';
import MobileHeader from 'components/Header/MobileHeader';
import Footer from 'components/Footer';
import Logo, { LogoType } from 'components/shared/Logo';
import {
  defaultTheme,
  cooperativeTheme,
  fmcTeamGrayTheme,
  fmcTeamRedTheme,
  producerTheme,
} from 'styles/theme';
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

  const [logoType, setLogoType] = useState<LogoType | undefined>(undefined);

  const [textSimulating, setTextSimulating] = useState('');

  useEffect(() => {
    const rtcDmKamProfiles: ApproverProfile[] = [DM, RTC, KAM];

    if (!participant || !participant.id) {
      setTheme(null);
      return;
    }

    if (rtcDmKamProfiles.includes(participant.profile_value)) {
      setTheme(fmcTeamRedTheme);
      setLogoType('fmcTeam');
      return;
    }

    if (participant.profile === 'FMC') {
      setTheme(fmcTeamGrayTheme);
      setLogoType('fmcTeam');
      return;
    }

    if (participant.profile === 'PRODUTOR') {
      setTheme(producerTheme);
      setLogoType('fmcProdutor');
      return;
    }

    if (
      participant.establishment.type_name === EstablishmentTypes.Cooperative
    ) {
      setTheme(cooperativeTheme);
      setLogoType(EstablishmentTypes.Cooperative);
      return;
    }

    setLogoType(EstablishmentTypes.Resale);
    setTheme(defaultTheme);
  }, [participant]);

  useEffect(() => {
    setTextSimulating('');
    if (!simulating) {
      setTextSimulating('');
      return;
    }
    if (participant.profile === PROFILES.focalPoint) {
      setTextSimulating('Vis??o do Focal Point');
      return;
    }
    setTextSimulating('Vis??o do Participante');
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
          <img src={Manutencao} alt="Site em Manuten????o" />
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
              <Logo logoType={logoType} />
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
