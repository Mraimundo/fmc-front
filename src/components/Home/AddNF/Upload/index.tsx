import React, { useState, useCallback } from 'react';

// import uploadFileToStorage from 'services/storage/sendFile';

import { ReactSVG } from 'react-svg';
import uploadIcon from 'assets/images/fmcProdutor/upload-icon.svg';
// import { pluginApi } from 'services/api';
import {
  Container,
  Button,
  ButtonModal,
  Modal,
  ContainerModal,
  CloseModal,
} from './styles';

interface AddNota {
  urlnota: string;
}

interface Props {
  onUpdate: () => void;
}

const Upload: React.FC<Props> = Props => {
  // const [fileUrl, setFileUrl] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showBlockedUploadModal, setShowBlockedUploadModal] = useState(false);

  setFileUrl(' ');

  /* const handleAttachFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        const { url } = await uploadFileToStorage(e.target.files[0], 'notas');
        setFileUrl(url);
        pluginApi.post<AddNota>('participants/UploadNota/add', {
          urlnota: url,
        });
        Props.onUpdate();
        setShowModal(true);
      }
    },
    [Props],
  ); */

  const onRequestClose = useCallback(() => {
    setShowModal(false);
  }, []);

  const onRequestCloseBlockedUpload = useCallback(() => {
    setShowBlockedUploadModal(false);
  }, []);
  const onRequestOpenBlockedUpload = useCallback(() => {
    setShowBlockedUploadModal(true);
  }, []);

  return (
    <Container>
      <h4> Faça o upload aqui! </h4>
      <Button onClick={onRequestOpenBlockedUpload} disabled={fileUrl !== ' '}>
        {/*  <input
          type="file"
          id="fileId"
          accept="image/x-png, image/jpg,.pdf"
          onChange={handleAttachFile}
        /> */}
        <div>
          <ReactSVG src={uploadIcon} className="icon" />
          <span>Carregar arquivo</span>
        </div>
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

      <Modal
        isOpen={showBlockedUploadModal}
        type="secondary"
        onRequestClose={onRequestCloseBlockedUpload}
      >
        <ContainerModal>
          <CloseModal onClick={onRequestCloseBlockedUpload} />
          <p>
            A partir de Janeiro 2021 as compras dos produtos FMC realizadas nos
            estabelecimentos parceiros valerão FMC Coins!
          </p>
          <ButtonModal onClick={onRequestCloseBlockedUpload}>ok</ButtonModal>
        </ContainerModal>
      </Modal>
    </Container>
  );
};

export default Upload;
