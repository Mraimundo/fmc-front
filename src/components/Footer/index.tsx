import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';

import fmcLogo from 'assets/images/indication/logo-fmc.svg';
import SocialMedia from './SocialMedia';
import AppDownload from './AppDownload';
import AppDownloadModal from './AppDownload/Modal';
import Warning from './Warning';
import { FooterHead, FmcLogo, Copyright } from './styles';

const Footer: React.FC = () => {
  const [modalAppIsVisible, setModalAppIsVisible] = useState(false);

  return (
    <footer>
      <FooterHead>
        <FmcLogo>
          <ReactSVG src={fmcLogo} />
        </FmcLogo>
        <SocialMedia />
        <AppDownload onClick={() => setModalAppIsVisible(true)} />
      </FooterHead>
      <Warning />
      <Copyright>
        Copyright &copy; {new Date().getFullYear()} FMC Corporation. Todos os
        direitos reservados.
      </Copyright>
      <AppDownloadModal
        isOpen={modalAppIsVisible}
        onClose={() => setModalAppIsVisible(false)}
      />
    </footer>
  );
};

export default Footer;
