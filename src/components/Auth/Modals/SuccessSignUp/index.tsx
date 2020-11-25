import React from 'react';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';

import { Modal, Container, Content, Close } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose(): void;
}

const SuccessSignUp: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} type="primary">
      <Container>
        <Close>
          <button type="button" onClick={onRequestClose}>
            <ReactSVG src={closeIcon} />
          </button>
        </Close>
        <Content>
          <h3>Cadastro enviado com sucesso!</h3>
          <h4>
            Obrigado por enviar seus dados. Em até 48 horas úteis uma mensagem
            de validação será enviada para o e-mail cadastrado.
          </h4>
          <Button
            type="button"
            buttonRole="quaternary"
            onClick={onRequestClose}
          >
            Ok
          </Button>
        </Content>
      </Container>
    </Modal>
  );
};

export default SuccessSignUp;
