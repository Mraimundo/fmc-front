import React from 'react';

// import Modal from 'components/shared/Modal';

import { ReactSVG } from 'react-svg';
import CloseIcon from 'assets/images/training/close-icon.svg';
import CommentIcon from 'assets/images/contact/message.svg';
import TextArea from 'components/shared/TextArea';
import {
  Container,
  Close,
  CustomModal as Modal,
  Header,
  CommentsListWrapper,
  CommentWrapper,
} from './styles';

interface NegotiationModalProps {
  isOpen: boolean;
  agreementTermId: string;
  confirmRequest: () => void;
  cancelRequest: () => void;
}

const NegotiationModal: React.FC<NegotiationModalProps> = ({
  isOpen,
  agreementTermId,
  confirmRequest,
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
          <h3>Negociação</h3>
          <p>{agreementTermId}</p>
        </Header>
        <CommentsListWrapper />
        <CommentWrapper />
      </Container>
    </Modal>
  );
};

export default NegotiationModal;
