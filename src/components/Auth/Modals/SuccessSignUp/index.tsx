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
          <h3>Parabéns!</h3>
          <h4>Clique no botão abaixo para fazer o seu login.</h4>
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
