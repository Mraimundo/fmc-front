import React from 'react';

import { ReactSVG } from 'react-svg';
import logoFmc from 'assets/images/indication/logo-fmc.svg';
import logoImg from 'assets/images/logo.png';
import googlePlay from 'assets/images/store/play-store.png';
import appleStore from 'assets/images/store/app-store.png';
import { appDownloadLinks } from 'config/constants';

import {
  Container,
  Content,
  JuntosApp,
  Logo,
  StyledCenterText,
  Footer,
} from './styles';

const QrCode: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo src={logoImg} alt="Logo Juntos FMC" />
        <StyledCenterText>
          <h3>Que tal ter o aplicativo do</h3>
          <h3>programa JUNTOS sempre a mão?</h3>
          <p>Baixe Agora</p>
        </StyledCenterText>

        <JuntosApp>
          <a
            href={appDownloadLinks.juntos.appleStore}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={appleStore} alt="app-store" />
          </a>
          <a
            href={appDownloadLinks.juntos.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={googlePlay} alt="play-store" />
          </a>
        </JuntosApp>
        <a href="/">Visite o site</a>
      </Content>
      <Footer>
        <ReactSVG src={logoFmc} />
      </Footer>
    </Container>
  );
};

export default QrCode;
