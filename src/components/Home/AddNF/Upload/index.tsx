import React, { useState, useCallback } from 'react';

import uploadFileToStorage from 'services/storage/sendFile';

import { ReactSVG } from 'react-svg';
import uploadIcon from 'assets/images/fmcProdutor/upload-icon.svg';
import { pluginApi } from 'services/api';
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
  secondary?: boolean;
}

const Upload: React.FC<Props> = Props => {
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
        setTimeout(() => {
          Props.onUpdate();
        }, 400);
        setShowModal(true);
      }
    },
    [Props],
  );

  const onRequestClose = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <Container>
      {!Props.secondary && <h4> Faça o upload aqui! </h4>}
      <Button disabled={fileUrl !== ''}>
        <input
          type="file"
          id="fileId"
          accept="image/x-png, image/jpg,.pdf"
          onChange={handleAttachFile}
        />
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
          <h3>Parabéns, sua nota fiscal foi cadastrada com sucesso! </h3>

          <p>
            Se aprovada, seus FMC Coins estarão disponíveis em até 30 dias.
            <br />
            Você poderá acompanhar o status detalhado na página Extrato de Notas
            Fiscais.
            <br />
            <br />
            Equipe JUNTOS FMC
          </p>

          <ButtonModal onClick={onRequestClose}>ok</ButtonModal>
        </ContainerModal>
      </Modal>
    </Container>
  );
};

export default Upload;
