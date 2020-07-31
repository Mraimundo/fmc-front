import React from 'react';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';
import { Response as Certificate } from 'services/training/getCertificate';

import { Modal, Container, Content, Close } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose(): void;
  certificate: Certificate;
}

const PopupSuccess: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  certificate,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} type="primary">
      <Container>
        <Close>
          <button type="button" onClick={onRequestClose}>
            <ReactSVG src={closeIcon} />
          </button>
        </Close>
        <Content>
          <h3>Parabéns!</h3>
          <h4>Treinamento concluído com sucesso</h4>
          {certificate.hasCertificate ? (
            <a href={certificate.url}>Baixar certificado (PDF)</a>
          ) : (
            <span>
              Agora é só aguardar o período de download do certificado!
            </span>
          )}
        </Content>
        <Button type="button" buttonRole="primary" onClick={onRequestClose}>
          Ok
        </Button>
      </Container>
    </Modal>
  );
};

export default PopupSuccess;
