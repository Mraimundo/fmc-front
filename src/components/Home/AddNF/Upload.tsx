import React from 'react';

import { ReactSVG } from 'react-svg';
import uploadIcon from 'assets/images/fmcProdutor/upload-icon.svg';
import uploadFileToStorage from 'services/storage/sendFile';
import { StyledUpload } from './styles';

const Upload: React.FC = () => {
  return (
    <>
      <StyledUpload>
        <h4> Faça o upload aqui! </h4>
        <div className="button">
          <input type="file" id="fileId" accept="image/x-png, image/jpg,.pdf" />
          <ReactSVG src={uploadIcon} className="icon" />
          Carregar arquivo
        </div>
      </StyledUpload>
    </>
  );
};

export default Upload;
