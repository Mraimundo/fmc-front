import React from 'react';
import { Button } from 'components/shared';

import { Modal, Container, Content, Close } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose(): void;
}

const PopupSuccess: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} type="primary">
      <Container>
        <Close>
          <button type="button" onClick={onRequestClose}>
            X
          </button>
        </Close>
        <Content>
          <h3>Parabéns!</h3>
          <h4>Treinamento concluído com sucesso</h4>
          <a href="google.com">Baixar certificado (PDF)</a>
        </Content>
        <Button type="button" buttonRole="primary" onClick={onRequestClose}>
          Ok
        </Button>
      </Container>
    </Modal>
  );
};

export default PopupSuccess;
