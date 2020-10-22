import React, { useState, useCallback } from 'react';

import uploadFileToStorage from 'services/storage/sendFile';

import { ReactSVG } from 'react-svg';
import uploadIcon from 'assets/images/fmcProdutor/upload-icon.svg';
import { pluginApi } from 'services/api';
import {
  Container,
  Button,
  ButtonModal,
  ContainerModal,
  CloseModal,
  Modal,
} from './styles';

interface AddNota {
  urlnota: string;
}

const Upload: React.FC = () => {
  const [fileUrl, setFileUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAttachFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        const { url } = await uploadFileToStorage(e.target.files[0], 'notas');
        setFileUrl(url);

        pluginApi.post<AddNota>('participants/UploadNota/add', {
          urlnota: url,
        });
        setShowModal(true);
      }
    },
    [],
  );
  const onRequestClose = () => {
    setShowModal(false);
    console.log('TESTE onRequestClose');
  };
  return (
    <Container>
      <h4> Faça o upload aqui! </h4>
      <Button disabled={fileUrl !== ''}>
        {fileUrl !== '' ? (
          <span>Nota fiscal enviada Com sucesso!</span>
        ) : (
          <div>
            <input
              type="file"
              id="fileId"
              accept="image/x-png, image/jpg,.pdf"
              onChange={handleAttachFile}
            />

            <ReactSVG src={uploadIcon} className="icon" />
            <span>Carregar arquivo</span>
          </div>
        )}
      </Button>

      <Modal
        isOpen={showModal}
        type="secondary"
        onRequestClose={onRequestClose}
      >
        <ContainerModal>
          <CloseModal onClick={onRequestClose} />
          <h3>Nota fiscal enviada com sucesso!</h3>
          <ButtonModal onClick={onRequestClose}>ok</ButtonModal>
        </ContainerModal>
      </Modal>
    </Container>
  );
};

export default Upload;
