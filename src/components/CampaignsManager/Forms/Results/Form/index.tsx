import React, { useState, useCallback } from 'react';
import uploadFileToStorage from 'services/storage/sendFile';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import uploadIcon from 'assets/images/campaigns/upload-icon.svg';

import { Container, Content } from './styles';

const Form: React.FC = () => {
  const [attachingFile, setAttachingFile] = useState(false);
  const [fileUrl, setFileUrl] = useState('');

  const handleAttachFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        setAttachingFile(true);
        const { url } = await uploadFileToStorage(e.target.files[0], 'avatar');
        setFileUrl(url);
        setAttachingFile(false);
      }
    },
    [],
  );

  return (
    <Container>
      <h4>Resultados</h4>
      <Content>
        <label htmlFor="fileId">
          <input
            type="file"
            id="fileId"
            accept=".xlsx, .xls"
            onChange={handleAttachFile}
          />
          <ReactSVG src={uploadIcon} />
          {fileUrl !== '' ? (
            <span>Arquivo de resultados selecionado</span>
          ) : (
            <span>
              {attachingFile
                ? 'Carregando ... '
                : 'Carregar arquivo de resultados'}
            </span>
          )}
        </label>
        <Button type="button" buttonRole="primary">
          Enviar
        </Button>
      </Content>
    </Container>
  );
};

export default Form;
