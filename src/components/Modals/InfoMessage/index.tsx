import React from 'react';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';

import { Modal, Container, Content, Close } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose(): void;
  text: string | Node;
  className?: string;
}

const SuccessEditRegister: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  text,
  className,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      type="primary"
      className={className}
    >
      <Container>
        <Close>
          <button type="button" onClick={onRequestClose}>
            <ReactSVG src={closeIcon} />
          </button>
        </Close>
        <Content>
          <h4>{text}</h4>
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

export default SuccessEditRegister;
