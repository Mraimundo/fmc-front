import React, { useCallback } from 'react';

import { ReactSVG } from 'react-svg';
import DownloadIcon from 'assets/images/indication/download.svg';
import { Container } from './styles';

interface AgreementDownloadProps {
  url: string;
}

const AgreementDownload: React.FC<AgreementDownloadProps> = ({ url }) => {
  const handleClick = useCallback(() => {
    window.open(url, '_blank');
  }, [url]);

  return (
    <Container>
      <ReactSVG src={DownloadIcon} onClick={handleClick} />
      <a href="#" onClick={handleClick}>
        Download
      </a>
    </Container>
  );
};

export default AgreementDownload;
