import React from 'react';

import { ReactSVG } from 'react-svg';
import CloseIcon from 'assets/images/training/close-icon.svg';
import CommentIcon from 'assets/images/contact/message.svg';

import {
  Container,
  CustomModal as Modal,
  Close,
  Header,
  ReasonWrapper,
} from './styles';

interface ReproveModalProps {
  isOpen: boolean;
  reason: string;
  cancelRequest: () => void;
}

const ReproveModal: React.FC<ReproveModalProps> = ({
  isOpen,
  reason,
  cancelRequest,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={cancelRequest}>
      <Close>
        <button type="button" onClick={cancelRequest}>
          <ReactSVG src={CloseIcon} />
        </button>
      </Close>
      <Container>
        <Header>
          <ReactSVG src={CommentIcon} />
          <h3>Motivo da reprovação</h3>
        </Header>
        <ReasonWrapper>
          <p>{reason}</p>
        </ReasonWrapper>
      </Container>
    </Modal>
  );
};

export default ReproveModal;
