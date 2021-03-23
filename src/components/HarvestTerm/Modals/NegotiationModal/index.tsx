import React, { useEffect, useState } from 'react';

// import Modal from 'components/shared/Modal';

import { ReactSVG } from 'react-svg';
import CloseIcon from 'assets/images/training/close-icon.svg';
import CommentIcon from 'assets/images/contact/message.svg';
import CommentForm from 'components/HarvestTerm/Forms/Comment';
import { getComments } from 'services/harvest-term/comments';
import { Comment } from 'services/harvest-term/interface';
import CommentList from 'components/HarvestTerm/Lists/Comments';

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
  cancelRequest: () => void;
}

const NegotiationModal: React.FC<NegotiationModalProps> = ({
  isOpen,
  agreementTermId,
  cancelRequest,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const result = await getComments(parseInt(agreementTermId, 10));
      setComments(result);
    };
    if (isOpen) {
      fetchComments();
    }
  }, [agreementTermId, isOpen]);

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
        </Header>
        <CommentsListWrapper>
          <p>Comentário:</p>
          <CommentList comments={comments} />
        </CommentsListWrapper>
        <CommentWrapper>
          <CommentForm agreementTermId={agreementTermId} />
        </CommentWrapper>
      </Container>
    </Modal>
  );
};

export default NegotiationModal;
