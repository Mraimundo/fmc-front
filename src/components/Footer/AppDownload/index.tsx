import React from 'react';
import { ReactSVG } from 'react-svg';

import appStores from 'assets/images/app-stores.svg';
import { Wrapper, DownloadText } from './styles';

interface AppDownloadProps {
  onClick(): void;
}
const AppDownload: React.FC<AppDownloadProps> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick} style={{ display: 'none' }}>
      <DownloadText>BAIXE O APP</DownloadText>
      <ReactSVG src={appStores} />
    </Wrapper>
  );
};

export default AppDownload;
