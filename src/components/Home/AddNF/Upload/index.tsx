import React from 'react';

import { ReactSVG } from 'react-svg';
import uploadIcon from 'assets/images/fmcProdutor/upload-icon.svg';
import { Container, Button } from './styles';

const Upload: React.FC = () => {
  return (
    <Container>
      <h4> Faça o upload aqui! </h4>
      <Button>
        <input type="file" id="fileId" accept="image/x-png, image/jpg,.pdf" />
        <ReactSVG src={uploadIcon} className="icon" />
        Carregar arquivo
      </Button>
    </Container>
  );
};

export default Upload;
