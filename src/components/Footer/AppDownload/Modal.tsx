import React from 'react';
import { ReactSVG } from 'react-svg';

import juntosApp from 'assets/images/juntos-app-phone.svg';
import fmcApp from 'assets/images/fmc-app-phone.svg';
import googlePlay from 'assets/images/google-play-btn.svg';
import appleStore from 'assets/images/apple-store-btn.svg';
import closeIcon from 'assets/images/training/close-icon.svg';
import { appDownloadLinks } from 'config/constants';
import {
  AppDownloadModalStyled,
  ModalTitle,
  WrapperModal,
  JuntosApp,
  FmcApp,
} from './styles';

interface AppDownloadModalProps {
  isOpen?: boolean;
  onClose(): void;
}
const AppDownloadModal: React.FC<AppDownloadModalProps> = ({
  isOpen = false,
  onClose,
}) => {
  return (
    <AppDownloadModalStyled isOpen={isOpen} onRequestClose={onClose}>
      <ReactSVG src={closeIcon} className="close-icon" onClick={onClose} />
      <ModalTitle>PARA SUA FELICIDADE BAIXE AGORA!</ModalTitle>
      <WrapperModal>
        <JuntosApp>
          <div>
            <a
              href={appDownloadLinks.juntos.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactSVG src={googlePlay} />
            </a>
            <a
              href={appDownloadLinks.juntos.appleStore}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactSVG src={appleStore} />
            </a>
          </div>
          <ReactSVG src={juntosApp} className="app-cellphone" />
        </JuntosApp>
        <FmcApp>
          <div>
            <a
              href={appDownloadLinks.fmc.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactSVG src={googlePlay} />
            </a>
            <a
              href={appDownloadLinks.fmc.appleStore}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ReactSVG src={appleStore} />
            </a>
          </div>
          <ReactSVG src={fmcApp} className="app-cellphone" />
        </FmcApp>
      </WrapperModal>
    </AppDownloadModalStyled>
  );
};

export default AppDownloadModal;
